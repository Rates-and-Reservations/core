import Stripe from 'stripe';
import { Prisma, PaymentStatus } from '@prisma/client';
import prisma from '@/config/database';
import logger from '@/utils/logger';
import { CreatePaymentIntentData, PaymentIntentResult, ProcessWebhookData, RefundPaymentData } from '@/types/payment';

// Initialize Stripe with API key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

/**
 * Core Payment Intent Operations
 */
export const createPaymentIntent = async (data: CreatePaymentIntentData): Promise<PaymentIntentResult> => {
  try {
    // Get booking details for payment intent
    const booking = await prisma.booking.findFirst({
      where: {
        id: data.bookingId,
        merchantId: data.merchantId,
        isDeleted: false,
      },
      include: {
        customer: true,
        resource: { select: { name: true } },
        rate: { select: { name: true } },
      },
    });

    if (!booking) {
      throw new Error('Booking not found for payment intent creation');
    }

    // Create Stripe customer if needed
    let stripeCustomerId: string | undefined;
    if (data.customerId || data.customerEmail) {
      stripeCustomerId = await getOrCreateStripeCustomer({
        customerId: data.customerId,
        email: data.customerEmail || booking.customer?.email,
        name: booking.customer?.name,
        merchantId: data.merchantId,
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: data.currency.toLowerCase(),
      customer: stripeCustomerId,
      automatic_payment_methods: data.automaticPaymentMethods ? { enabled: true } : undefined,
      capture_method: data.captureMethod || 'automatic',
      description: data.description || `Booking payment for ${booking.resource.name}`,
      metadata: {
        bookingId: booking.id,
        merchantId: data.merchantId,
        resourceName: booking.resource.name,
        rateName: booking.rate.name,
        ...data.metadata,
      },
      // Enable webhooks for this payment intent
      receipt_email: booking.customer?.email,
    });

    // Store payment action in database
    await prisma.paymentActions.create({
      data: {
        bookingId: data.bookingId,
        merchantId: data.merchantId,
        provider: 'stripe',
        providerPaymentId: paymentIntent.id,
        amount: new Prisma.Decimal(data.amount / 100), // Convert cents to dollars
        currency: data.currency,
        status: PaymentStatus.PENDING,
        paymentMethod: 'unknown', // Will be updated when payment completes
      },
    });

    logger.info('Payment intent created successfully', {
      paymentIntentId: paymentIntent.id,
      bookingId: data.bookingId,
      amount: data.amount,
      currency: data.currency,
    });

    return {
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret!,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    };
  } catch (error: any) {
    logger.error('Error creating payment intent:', error);
    throw new Error(`Payment intent creation failed: ${error.message}`);
  }
};

/**
 * Webhook Processing
 */
export const processStripeWebhook = async (data: ProcessWebhookData) => {
  try {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    
    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(
      data.payload,
      data.signature,
      endpointSecret
    );

    logger.info('Stripe webhook received', { 
      type: event.type, 
      id: event.id 
    });

    // Process based on event type
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
        
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;
        
      case 'payment_intent.canceled':
        await handlePaymentCanceled(event.data.object as Stripe.PaymentIntent);
        break;
        
      case 'charge.dispute.created':
        await handleChargeDispute(event.data.object as Stripe.Dispute);
        break;
        
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
        
      default:
        logger.info('Unhandled webhook event type', { type: event.type });
    }

    return { received: true };
  } catch (error: any) {
    logger.error('Stripe webhook processing error:', error);
    throw new Error(`Webhook processing failed: ${error.message}`);
  }
};

/**
 * Payment Event Handlers
 */
const handlePaymentSucceeded = async (paymentIntent: Stripe.PaymentIntent) => {
  try {
    const bookingId = paymentIntent.metadata.bookingId;
    const merchantId = paymentIntent.metadata.merchantId;

    if (!bookingId || !merchantId) {
      throw new Error('Missing booking or merchant ID in payment intent metadata');
    }

    await prisma.$transaction(async (tx) => {
      // Update payment action status
      // Fetch the latest charge to get payment method details
      let paymentMethodType = 'card';
      if (paymentIntent.latest_charge) {
        const charge = await stripe.charges.retrieve(paymentIntent.latest_charge as string);
        paymentMethodType = charge.payment_method_details?.type || 'card';
      }

      await tx.paymentActions.updateMany({
        where: {
          providerPaymentId: paymentIntent.id,
          merchantId,
        },
        data: {
          status: PaymentStatus.PAID,
          paymentMethod: paymentMethodType,
        },
      });

      // Update booking status to confirmed
      await tx.booking.update({
        where: {
          id: bookingId,
          merchantId,
        },
        data: {
          currentStatus: 'CONFIRMED',
        },
      });

      // Create booking transition log
      await tx.bookingTransition.create({
        data: {
          bookingId,
          fromStatus: 'PENDING',
          toStatus: 'CONFIRMED',
          reason: 'Payment confirmed',
          notes: `Payment successful via Stripe (${paymentIntent.id})`,
        },
      });

      // Update merchant revenue statistics (if you have this table)
      // This could be expanded for merchant analytics

      logger.info('Payment succeeded and booking confirmed', {
        paymentIntentId: paymentIntent.id,
        bookingId,
        amount: paymentIntent.amount,
      });
    });

    // TODO: Send confirmation email/SMS to customer
    // TODO: Send notification to merchant
    
  } catch (error: any) {
    logger.error('Error handling payment success:', error);
    throw error;
  }
};

const handlePaymentFailed = async (paymentIntent: Stripe.PaymentIntent) => {
  try {
    const bookingId = paymentIntent.metadata.bookingId;
    const merchantId = paymentIntent.metadata.merchantId;

    if (!bookingId || !merchantId) {
      throw new Error('Missing booking or merchant ID in payment intent metadata');
    }

    await prisma.$transaction(async (tx) => {
      // Update payment action status
      await tx.paymentActions.updateMany({
        where: {
          providerPaymentId: paymentIntent.id,
          merchantId,
        },
        data: {
          status: PaymentStatus.FAILED,
        },
      });

      // You might want to keep the booking as PENDING and allow retry
      // Or cancel it based on your business logic
      await tx.booking.update({
        where: {
          id: bookingId,
          merchantId,
        },
        data: {
          currentStatus: 'CANCELLED',
        },
      });

      await tx.bookingTransition.create({
        data: {
          bookingId,
          fromStatus: 'PENDING',
          toStatus: 'CANCELLED',
          reason: 'Payment failed',
          notes: `Payment failed via Stripe (${paymentIntent.id})`,
        },
      });
    });

    logger.info('Payment failed and booking cancelled', {
      paymentIntentId: paymentIntent.id,
      bookingId,
    });

    // TODO: Send payment failure notification to customer
    
  } catch (error: any) {
    logger.error('Error handling payment failure:', error);
    throw error;
  }
};

const handlePaymentCanceled = async (paymentIntent: Stripe.PaymentIntent) => {
  try {
    const bookingId = paymentIntent.metadata.bookingId;
    const merchantId = paymentIntent.metadata.merchantId;

    if (!bookingId || !merchantId) {
      return; // Not critical if metadata is missing for canceled payments
    }

    await prisma.paymentActions.updateMany({
      where: {
        providerPaymentId: paymentIntent.id,
        merchantId,
      },
      data: {
        status: PaymentStatus.FAILED,
      },
    });

    logger.info('Payment canceled', {
      paymentIntentId: paymentIntent.id,
      bookingId,
    });
    
  } catch (error: any) {
    logger.error('Error handling payment cancellation:', error);
  }
};

const handleChargeDispute = async (dispute: Stripe.Dispute) => {
  try {
    const chargeId = dispute.charge as string;
    
    // Log dispute for manual review
    logger.warn('Charge dispute created', {
      disputeId: dispute.id,
      chargeId,
      amount: dispute.amount,
      reason: dispute.reason,
    });

    // TODO: Implement dispute management workflow
    // - Notify merchant
    // - Gather evidence
    // - Update booking status if necessary
    
  } catch (error: any) {
    logger.error('Error handling charge dispute:', error);
  }
};

const handleInvoicePaymentSucceeded = async (invoice: Stripe.Invoice) => {
  try {
    // This would be for subscription billing if you implement that later
    logger.info('Invoice payment succeeded', {
      invoiceId: invoice.id,
      customerId: invoice.customer,
      amount: invoice.amount_paid,
    });
    
  } catch (error: any) {
    logger.error('Error handling invoice payment:', error);
  }
};

/**
 * Refund Operations
 */
export const createRefund = async (data: RefundPaymentData) => {
  try {
    // Get payment action details
    const paymentAction = await prisma.paymentActions.findFirst({
      where: {
        id: data.paymentActionId,
        isDeleted: false,
      },
      include: {
        booking: {
          include: {
            customer: true,
            resource: true,
          },
        },
      },
    });

    if (!paymentAction || paymentAction.status !== PaymentStatus.PAID) {
      throw new Error('Payment action not found or not eligible for refund');
    }

    // Calculate refund amount
    const maxRefundAmount = Number(paymentAction.amount) - Number(paymentAction.refundedAmount);
    const refundAmount = data.amount ? Math.min(data.amount / 100, maxRefundAmount) : maxRefundAmount;

    if (refundAmount <= 0) {
      throw new Error('No amount available for refund');
    }

    // Create Stripe refund
    const refund = await stripe.refunds.create({
      payment_intent: paymentAction.providerPaymentId,
      amount: Math.round(refundAmount * 100), // Convert to cents
      reason: data.reason,
      metadata: {
        bookingId: paymentAction.bookingId,
        merchantId: paymentAction.merchantId,
      },
    });

    // Update payment action
    const updatedPaymentAction = await prisma.paymentActions.update({
      where: { id: data.paymentActionId },
      data: {
        refundedAmount: {
          increment: new Prisma.Decimal(refundAmount),
        },
        status: refundAmount >= Number(paymentAction.amount) 
          ? PaymentStatus.REFUNDED 
          : PaymentStatus.PARTIALLY_REFUNDED,
      },
    });

    // Create refund log entry
    await prisma.refundLog.create({
      data: {
        refundRequestId: 'direct', // You might want to create a refund request record first
        paymentTransactionId: data.paymentActionId,
        amount: new Prisma.Decimal(refundAmount),
        currency: paymentAction.currency,
        provider: 'stripe',
        providerRefundId: refund.id,
        status: 'SUCCESS',
      },
    });

    logger.info('Refund created successfully', {
      refundId: refund.id,
      paymentActionId: data.paymentActionId,
      amount: refundAmount,
    });

    return {
      refundId: refund.id,
      amount: refundAmount,
      currency: paymentAction.currency,
      status: refund.status,
    };
    
  } catch (error: any) {
    logger.error('Error creating refund:', error);
    throw new Error(`Refund creation failed: ${error.message}`);
  }
};

/**
 * Customer Management
 */
const getOrCreateStripeCustomer = async (data: {
  customerId?: string;
  email?: string;
  name?: string;
  merchantId: string;
}): Promise<string> => {
  try {
    if (!data.email) {
      throw new Error('Email is required to create Stripe customer');
    }

    // Check if customer already has a Stripe ID stored
    if (data.customerId) {
      const customer = await prisma.customer.findFirst({
        where: {
          id: data.customerId,
          merchantId: data.merchantId,
          isDeleted: false,
        },
      });

      if (customer?.metadata && typeof customer.metadata === 'object') {
        const metadata = customer.metadata as any;
        if (metadata.stripeCustomerId) {
          return metadata.stripeCustomerId;
        }
      }
    }

    // Search for existing Stripe customer by email
    const existingCustomers = await stripe.customers.list({
      email: data.email,
      limit: 1,
    });

    let stripeCustomer: Stripe.Customer;

    if (existingCustomers.data.length > 0) {
      stripeCustomer = existingCustomers.data[0];
    } else {
      // Create new Stripe customer
      stripeCustomer = await stripe.customers.create({
        email: data.email,
        name: data.name,
        metadata: {
          merchantId: data.merchantId,
          customerId: data.customerId || '',
        },
      });
    }

    // Update customer record with Stripe ID
    if (data.customerId) {
      // Fetch the customer to get existing metadata
      const dbCustomer = await prisma.customer.findFirst({
        where: {
          id: data.customerId,
          merchantId: data.merchantId,
          isDeleted: false,
        },
      });

      await prisma.customer.update({
        where: { id: data.customerId },
        data: {
          metadata: {
            ...(dbCustomer?.metadata as any || {}),
            stripeCustomerId: stripeCustomer.id,
          } as unknown as Prisma.InputJsonValue,
        },
      });
    }

    return stripeCustomer.id;
    
  } catch (error: any) {
    logger.error('Error getting or creating Stripe customer:', error);
    throw error;
  }
};

/**
 * Payment Analytics
 */
export const getPaymentAnalytics = async (merchantId: string, startDate: Date, endDate: Date) => {
  try {
    const [
      totalPayments,
      totalRevenue,
      successfulPayments,
      failedPayments,
      refundedAmount,
    ] = await Promise.all([
      // Total payment count
      prisma.paymentActions.count({
        where: {
          merchantId,
          createdAt: { gte: startDate, lte: endDate },
          isDeleted: false,
        },
      }),

      // Total revenue
      prisma.paymentActions.aggregate({
        where: {
          merchantId,
          status: PaymentStatus.PAID,
          createdAt: { gte: startDate, lte: endDate },
          isDeleted: false,
        },
        _sum: { amount: true },
      }),

      // Successful payments
      prisma.paymentActions.count({
        where: {
          merchantId,
          status: PaymentStatus.PAID,
          createdAt: { gte: startDate, lte: endDate },
          isDeleted: false,
        },
      }),

      // Failed payments
      prisma.paymentActions.count({
        where: {
          merchantId,
          status: PaymentStatus.FAILED,
          createdAt: { gte: startDate, lte: endDate },
          isDeleted: false,
        },
      }),

      // Total refunded amount
      prisma.paymentActions.aggregate({
        where: {
          merchantId,
          createdAt: { gte: startDate, lte: endDate },
          isDeleted: false,
        },
        _sum: { refundedAmount: true },
      }),
    ]);

    const successRate = totalPayments > 0 ? (successfulPayments / totalPayments) * 100 : 0;

    return {
      totalPayments,
      successfulPayments,
      failedPayments,
      successRate: Math.round(successRate * 100) / 100,
      totalRevenue: Number(totalRevenue._sum.amount || 0),
      totalRefunded: Number(refundedAmount._sum.refundedAmount || 0),
      netRevenue: Number(totalRevenue._sum.amount || 0) - Number(refundedAmount._sum.refundedAmount || 0),
    };
    
  } catch (error: any) {
    logger.error('Error getting payment analytics:', error);
    throw error;
  }
};

/**
 * Merchant Payout Functions (for marketplace model)
 */
export const calculateMerchantPayout = async (merchantId: string, period: 'daily' | 'weekly' | 'monthly') => {
  try {
    // This is a placeholder for marketplace payout calculation
    // You would implement revenue sharing logic here
    
    const endDate = new Date();
    let startDate = new Date();
    
    switch (period) {
      case 'daily':
        startDate.setDate(endDate.getDate() - 1);
        break;
      case 'weekly':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case 'monthly':
        startDate.setMonth(endDate.getMonth() - 1);
        break;
    }

    const revenue = await prisma.paymentActions.aggregate({
      where: {
        merchantId,
        status: PaymentStatus.PAID,
        createdAt: { gte: startDate, lte: endDate },
        isDeleted: false,
      },
      _sum: { amount: true },
    });

    const totalRevenue = Number(revenue._sum.amount || 0);
    
    // Example: 95% goes to merchant, 5% platform fee
    const platformFeeRate = 0.05;
    const merchantPayout = totalRevenue * (1 - platformFeeRate);
    const platformFee = totalRevenue * platformFeeRate;

    return {
      period,
      startDate,
      endDate,
      totalRevenue,
      platformFee,
      merchantPayout,
      payoutEligible: merchantPayout > 10, // Minimum $10 payout
    };
    
  } catch (error: any) {
    logger.error('Error calculating merchant payout:', error);
    throw error;
  }
};

export default {
  createPaymentIntent,
  processStripeWebhook,
  createRefund,
  getPaymentAnalytics,
  calculateMerchantPayout,
};
