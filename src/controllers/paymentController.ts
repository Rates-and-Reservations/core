import { Response } from 'express';
import { successResponse, errorResponse } from '@/utils/responses';
import * as paymentService from '@/services/paymentService';
import logger from '@/utils/logger';
import { AuthenticatedRequest } from '@/types/api';
import prisma from '@/config/database';

/**
 * Create Payment Intent for Booking
 */
export const createPaymentIntent = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { bookingId, amount, currency = 'USD', customerId, automaticPaymentMethods = true } = req.body;

    if (!bookingId || !amount) {
      return errorResponse(res, 'Booking ID and amount are required', 400);
    }

    // Verify booking belongs to merchant
    const booking = await prisma.booking.findFirst({
      where: {
        id: bookingId,
        merchantId: req.merchant.id,
        isDeleted: false,
      },
      include: {
        customer: { select: { email: true } },
      },
    });

    if (!booking) {
      return errorResponse(res, 'Booking not found', 404);
    }

    const paymentIntent = await paymentService.createPaymentIntent({
      bookingId,
      merchantId: req.merchant.id,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      customerId,
      customerEmail: booking.customer?.email,
      automaticPaymentMethods,
      description: `Payment for booking ${bookingId}`,
      metadata: {
        merchantName: req.merchant.name,
      },
    });

    return successResponse(res, paymentIntent, 'Payment intent created successfully', 201);
  } catch (error: any) {
    logger.error('Create payment intent error:', error);
    return errorResponse(res, error.message || 'Failed to create payment intent', 500);
  }
};

/**
 * Handle Stripe Webhooks
 */
export const handleStripeWebhook = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const signature = req.headers['stripe-signature'] as string;
    
    if (!signature) {
      return errorResponse(res, 'Missing Stripe signature', 400);
    }

    const result = await paymentService.processStripeWebhook({
      payload: req.body,
      signature,
    });

    return successResponse(res, result, 'Webhook processed successfully');
  } catch (error: any) {
    logger.error('Stripe webhook error:', error);
    return errorResponse(res, error.message || 'Webhook processing failed', 400);
  }
};

/**
 * Create Refund
 */
export const createRefund = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { paymentActionId, amount, reason = 'requested_by_customer' } = req.body;

    if (!paymentActionId) {
      return errorResponse(res, 'Payment action ID is required', 400);
    }

    // Verify payment belongs to merchant
    const paymentAction = await prisma.paymentActions.findFirst({
      where: {
        id: paymentActionId,
        merchantId: req.merchant.id,
        isDeleted: false,
      },
    });

    if (!paymentAction) {
      return errorResponse(res, 'Payment not found', 404);
    }

    const refund = await paymentService.createRefund({
      paymentActionId,
      amount: amount ? Math.round(amount * 100) : undefined, // Convert to cents
      reason,
    });

    return successResponse(res, refund, 'Refund created successfully', 201);
  } catch (error: any) {
    logger.error('Create refund error:', error);
    return errorResponse(res, error.message || 'Failed to create refund', 500);
  }
};

/**
 * Get Payment Analytics
 */
export const getPaymentAnalytics = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { startDate, endDate } = req.query as any;
    
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
    const end = endDate ? new Date(endDate) : new Date();

    const analytics = await paymentService.getPaymentAnalytics(req.merchant.id, start, end);

    return successResponse(res, analytics, 'Payment analytics retrieved successfully');
  } catch (error: any) {
    logger.error('Get payment analytics error:', error);
    return errorResponse(res, 'Failed to retrieve payment analytics', 500);
  }
};

/**
 * Get Payment History
 */
export const getPaymentHistory = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { page = 1, limit = 20, status, startDate, endDate } = req.query as any;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where: any = {
      merchantId: req.merchant.id,
      isDeleted: false,
    };

    if (status) {
      where.status = status;
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate);
    }

    const [payments, total] = await Promise.all([
      prisma.paymentActions.findMany({
        where,
        skip,
        take: parseInt(limit),
        include: {
          booking: {
            include: {
              customer: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
              resource: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.paymentActions.count({ where }),
    ]);

    const paymentHistory = payments.map(payment => ({
      id: payment.id,
      bookingId: payment.bookingId,
      amount: Number(payment.amount),
      currency: payment.currency,
      status: payment.status,
      provider: payment.provider,
      providerPaymentId: payment.providerPaymentId,
      paymentMethod: payment.paymentMethod,
      refundedAmount: Number(payment.refundedAmount),
      createdAt: payment.createdAt,
      booking: {
        id: payment.booking.id,
        customer: payment.booking.customer,
        resource: payment.booking.resource,
        startTime: payment.booking.startTime,
        endTime: payment.booking.endTime,
        currentStatus: payment.booking.currentStatus,
      },
    }));

    return res.status(200).json({
      success: true,
      data: paymentHistory,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
      message: 'Payment history retrieved successfully',
    });
  } catch (error: any) {
    logger.error('Get payment history error:', error);
    return errorResponse(res, 'Failed to retrieve payment history', 500);
  }
};

/**
 * Get Merchant Payout Information
 */
export const getMerchantPayout = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { period = 'monthly' } = req.query as any;

    if (!['daily', 'weekly', 'monthly'].includes(period)) {
      return errorResponse(res, 'Invalid period. Must be daily, weekly, or monthly', 400);
    }

    const payout = await paymentService.calculateMerchantPayout(req.merchant.id, period);

    return successResponse(res, payout, 'Merchant payout information retrieved successfully');
  } catch (error: any) {
    logger.error('Get merchant payout error:', error);
    return errorResponse(res, 'Failed to retrieve payout information', 500);
  }
};

/**
 * Get Payment Details
 */
export const getPaymentDetails = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { id } = req.params;

    const payment = await prisma.paymentActions.findFirst({
      where: {
        id,
        merchantId: req.merchant.id,
        isDeleted: false,
      },
      include: {
        booking: {
          include: {
            customer: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true,
              },
            },
            resource: {
              select: {
                id: true,
                name: true,
              },
            },
            rate: {
              select: {
                id: true,
                name: true,
                price: true,
                currency: true,
              },
            },
          },
        },
        RefundRequest: {
          include: {
            RefundLog: true,
          },
        },
      },
    });

    if (!payment) {
      return errorResponse(res, 'Payment not found', 404);
    }

    const paymentDetails = {
      id: payment.id,
      bookingId: payment.bookingId,
      amount: Number(payment.amount),
      currency: payment.currency,
      status: payment.status,
      provider: payment.provider,
      providerPaymentId: payment.providerPaymentId,
      paymentMethod: payment.paymentMethod,
      refundedAmount: Number(payment.refundedAmount),
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
      booking: {
        id: payment.booking.id,
        startTime: payment.booking.startTime,
        endTime: payment.booking.endTime,
        partySize: payment.booking.partySize,
        totalPrice: Number(payment.booking.totalPrice),
        currentStatus: payment.booking.currentStatus,
        customer: payment.booking.customer,
        resource: payment.booking.resource,
        rate: payment.booking.rate,
      },
      refunds: payment.RefundRequest.map(refund => ({
        id: refund.id,
        amount: Number(refund.amount),
        currency: refund.currency,
        status: refund.status,
        reason: refund.reason,
        requestedAt: refund.requestedAt,
        processedAt: refund.processedAt,
        logs: refund.RefundLog.map(log => ({
          id: log.id,
          amount: Number(log.amount),
          status: log.status,
          providerRefundId: log.providerRefundId,
          createdAt: log.createdAt,
        })),
      })),
    };

    return successResponse(res, paymentDetails, 'Payment details retrieved successfully');
  } catch (error: any) {
    logger.error('Get payment details error:', error);
    return errorResponse(res, 'Failed to retrieve payment details', 500);
  }
};

/**
 * Retry Failed Payment
 */
export const retryPayment = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { id } = req.params;

    // Get the failed payment
    const failedPayment = await prisma.paymentActions.findFirst({
      where: {
        id,
        merchantId: req.merchant.id,
        status: 'FAILED',
        isDeleted: false,
      },
      include: {
        booking: {
          include: {
            customer: true,
          },
        },
      },
    });

    if (!failedPayment) {
      return errorResponse(res, 'Failed payment not found', 404);
    }

    // Create new payment intent for retry
    const paymentIntent = await paymentService.createPaymentIntent({
      bookingId: failedPayment.bookingId,
      merchantId: req.merchant.id,
      amount: Math.round(Number(failedPayment.amount) * 100), // Convert to cents
      currency: failedPayment.currency,
      customerEmail: failedPayment.booking.customer?.email,
      automaticPaymentMethods: true,
      description: `Retry payment for booking ${failedPayment.bookingId}`,
      metadata: {
        originalPaymentId: failedPayment.id,
        retryAttempt: 'true',
      },
    });

    return successResponse(res, paymentIntent, 'Payment retry initiated successfully', 201);
  } catch (error: any) {
    logger.error('Retry payment error:', error);
    return errorResponse(res, error.message || 'Failed to retry payment', 500);
  }
};

/**
 * Update Payment Method for Booking
 */
export const updatePaymentMethod = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { bookingId } = req.params;
    const { paymentMethodId } = req.body;

    if (!paymentMethodId) {
      return errorResponse(res, 'Payment method ID is required', 400);
    }

    // Verify booking belongs to merchant
    const booking = await prisma.booking.findFirst({
      where: {
        id: bookingId,
        merchantId: req.merchant.id,
        isDeleted: false,
      },
      include: {
        customer: true,
        PaymentActions: {
          where: { status: 'PENDING' },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!booking) {
      return errorResponse(res, 'Booking not found', 404);
    }

    if (booking.PaymentActions.length === 0) {
      return errorResponse(res, 'No pending payment found for this booking', 400);
    }

    const pendingPayment = booking.PaymentActions[0];

    // Update the payment intent with new payment method
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    await stripe.paymentIntents.update(pendingPayment.providerPaymentId, {
      payment_method: paymentMethodId,
    });

    return successResponse(res, null, 'Payment method updated successfully');
  } catch (error: any) {
    logger.error('Update payment method error:', error);
    return errorResponse(res, error.message || 'Failed to update payment method', 500);
  }
};

/**
 * Get Payment Methods for Customer
 */
export const getCustomerPaymentMethods = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.merchant) {
      return errorResponse(res, 'Merchant access required', 403);
    }

    const { customerId } = req.params;

    // Get customer with Stripe ID
    const customer = await prisma.customer.findFirst({
      where: {
        id: customerId,
        merchantId: req.merchant.id,
        isDeleted: false,
      },
    });

    if (!customer) {
      return errorResponse(res, 'Customer not found', 404);
    }

    // Check if customer has Stripe ID in metadata
    const metadata = customer.metadata as any;
    const stripeCustomerId = metadata?.stripeCustomerId;

    if (!stripeCustomerId) {
      return successResponse(res, [], 'No payment methods found');
    }

    // Get payment methods from Stripe
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    const paymentMethods = await stripe.paymentMethods.list({
      customer: stripeCustomerId,
      type: 'card',
    });

    const formattedPaymentMethods = paymentMethods.data.map((pm: any) => ({
      id: pm.id,
      type: pm.type,
      card: {
        brand: pm.card.brand,
        last4: pm.card.last4,
        expMonth: pm.card.exp_month,
        expYear: pm.card.exp_year,
      },
      created: new Date(pm.created * 1000),
    }));

    return successResponse(res, formattedPaymentMethods, 'Payment methods retrieved successfully');
  } catch (error: any) {
    logger.error('Get customer payment methods error:', error);
    return errorResponse(res, 'Failed to retrieve payment methods', 500);
  }
};

export default {
  createPaymentIntent,
  handleStripeWebhook,
  createRefund,
  getPaymentAnalytics,
  getPaymentHistory,
  getMerchantPayout,
  getPaymentDetails,
  retryPayment,
  updatePaymentMethod,
  getCustomerPaymentMethods,
};
