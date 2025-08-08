import { Router } from 'express';
import { validateRequest } from '@/middleware/validation';
import { requireRole, requireMerchantAccess, authMiddleware } from '@/middleware/auth';
import * as paymentController from '@/controllers/paymentController';
import {
  createPaymentIntentSchema,
  createRefundSchema,
  paymentHistoryQuerySchema,
  merchantPayoutQuerySchema,
  retryPaymentSchema,
  updatePaymentMethodSchema
} from '@/validators/paymentValidators';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     PaymentIntent:
 *       type: object
 *       properties:
 *         paymentIntentId:
 *           type: string
 *         clientSecret:
 *           type: string
 *         status:
 *           type: string
 *         amount:
 *           type: integer
 *         currency:
 *           type: string
 *     PaymentAction:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         bookingId:
 *           type: string
 *         amount:
 *           type: number
 *         currency:
 *           type: string
 *         status:
 *           type: string
 *           enum: [PENDING, PAID, FAILED, REFUNDED, PARTIALLY_REFUNDED]
 *         provider:
 *           type: string
 *         providerPaymentId:
 *           type: string
 *         paymentMethod:
 *           type: string
 *         refundedAmount:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *     PaymentAnalytics:
 *       type: object
 *       properties:
 *         totalPayments:
 *           type: integer
 *         successfulPayments:
 *           type: integer
 *         failedPayments:
 *           type: integer
 *         successRate:
 *           type: number
 *         totalRevenue:
 *           type: number
 *         totalRefunded:
 *           type: number
 *         netRevenue:
 *           type: number
 */

/**
 * @swagger
 * /api/payments/intent:
 *   post:
 *     summary: Create a payment intent for a booking
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookingId
 *               - amount
 *             properties:
 *               bookingId:
 *                 type: string
 *                 example: "booking_123"
 *               amount:
 *                 type: number
 *                 minimum: 0.5
 *                 example: 100.00
 *                 description: "Amount in dollars (will be converted to cents for Stripe)"
 *               currency:
 *                 type: string
 *                 default: "USD"
 *                 example: "USD"
 *               customerId:
 *                 type: string
 *                 description: "Optional customer ID for saved payment methods"
 *               automaticPaymentMethods:
 *                 type: boolean
 *                 default: true
 *               captureMethod:
 *                 type: string
 *                 enum: [automatic, manual]
 *                 default: automatic
 *     responses:
 *       201:
 *         description: Payment intent created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/PaymentIntent'
 *                 message:
 *                   type: string
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Payment intent creation failed
 */
router.post('/intent',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: createPaymentIntentSchema }),
  paymentController.createPaymentIntent
);

/**
 * @swagger
 * /api/payments/webhook:
 *   post:
 *     summary: Handle Stripe webhooks
 *     tags: [Payments]
 *     description: Endpoint for Stripe to send webhook events (payment confirmations, failures, etc.)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Stripe webhook payload
 *     responses:
 *       200:
 *         description: Webhook processed successfully
 *       400:
 *         description: Invalid webhook signature or payload
 */
router.post('/webhook',
  // Note: No authentication middleware - Stripe webhooks use signature verification
  paymentController.handleStripeWebhook
);

/**
 * @swagger
 * /api/payments/refund:
 *   post:
 *     summary: Create a refund for a payment
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - paymentActionId
 *             properties:
 *               paymentActionId:
 *                 type: string
 *                 example: "payment_123"
 *               amount:
 *                 type: number
 *                 description: "Refund amount in dollars (optional - full refund if not specified)"
 *                 example: 50.00
 *               reason:
 *                 type: string
 *                 enum: [duplicate, fraudulent, requested_by_customer]
 *                 default: requested_by_customer
 *     responses:
 *       201:
 *         description: Refund created successfully
 *       404:
 *         description: Payment not found
 *       400:
 *         description: Payment not eligible for refund
 */
router.post('/refund',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ body: createRefundSchema }),
  paymentController.createRefund
);

/**
 * @swagger
 * /api/payments/analytics:
 *   get:
 *     summary: Get payment analytics for the merchant
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *         description: "Start date for analytics (defaults to 30 days ago)"
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *         description: "End date for analytics (defaults to now)"
 *     responses:
 *       200:
 *         description: Payment analytics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/PaymentAnalytics'
 */
router.get('/analytics',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  paymentController.getPaymentAnalytics
);

/**
 * @swagger
 * /api/payments/history:
 *   get:
 *     summary: Get payment history for the merchant
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING, PAID, FAILED, REFUNDED, PARTIALLY_REFUNDED]
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *     responses:
 *       200:
 *         description: Payment history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     allOf:
 *                       - $ref: '#/components/schemas/PaymentAction'
 *                       - type: object
 *                         properties:
 *                           booking:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                               customer:
 *                                 type: object
 *                               resource:
 *                                 type: object
 *                               startTime:
 *                                 type: string
 *                                 format: date-time
 *                               endTime:
 *                                 type: string
 *                                 format: date-time
 *                               currentStatus:
 *                                 type: string
 *                 pagination:
 *                   type: object
 */
router.get('/history',
  requireMerchantAccess,
  validateRequest({ query: paymentHistoryQuerySchema }),
  paymentController.getPaymentHistory
);

/**
 * @swagger
 * /api/payments/payout:
 *   get:
 *     summary: Get merchant payout information
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [daily, weekly, monthly]
 *           default: monthly
 *     responses:
 *       200:
 *         description: Payout information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     period:
 *                       type: string
 *                     startDate:
 *                       type: string
 *                       format: date-time
 *                     endDate:
 *                       type: string
 *                       format: date-time
 *                     totalRevenue:
 *                       type: number
 *                     platformFee:
 *                       type: number
 *                     merchantPayout:
 *                       type: number
 *                     payoutEligible:
 *                       type: boolean
 */
router.get('/payout',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN']),
  validateRequest({ query: merchantPayoutQuerySchema }),
  paymentController.getMerchantPayout
);

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get detailed payment information
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment action ID
 *     responses:
 *       200:
 *         description: Payment details retrieved successfully
 *       404:
 *         description: Payment not found
 */
router.get('/:id',
  requireMerchantAccess,
  paymentController.getPaymentDetails
);

/**
 * @swagger
 * /api/payments/{id}/retry:
 *   post:
 *     summary: Retry a failed payment
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Failed payment action ID
 *     responses:
 *       201:
 *         description: Payment retry initiated successfully
 *       404:
 *         description: Failed payment not found
 */
router.post('/:id/retry',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ query: retryPaymentSchema }),
  paymentController.retryPayment
);

/**
 * @swagger
 * /api/payments/booking/{bookingId}/payment-method:
 *   put:
 *     summary: Update payment method for a booking
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - paymentMethodId
 *             properties:
 *               paymentMethodId:
 *                 type: string
 *                 description: Stripe payment method ID
 *     responses:
 *       200:
 *         description: Payment method updated successfully
 *       404:
 *         description: Booking not found or no pending payment
 */
router.put('/booking/:bookingId/payment-method',
  requireMerchantAccess,
  requireRole(['OWNER', 'ADMIN', 'STAFF']),
  validateRequest({ body: updatePaymentMethodSchema }),
  paymentController.updatePaymentMethod
);

/**
 * @swagger
 * /api/payments/customers/{customerId}/payment-methods:
 *   get:
 *     summary: Get saved payment methods for a customer
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Payment methods retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       type:
 *                         type: string
 *                       card:
 *                         type: object
 *                         properties:
 *                           brand:
 *                             type: string
 *                           last4:
 *                             type: string
 *                           expMonth:
 *                             type: integer
 *                           expYear:
 *                             type: integer
 *                       created:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: Customer not found
 */
router.get('/customers/:customerId/payment-methods',
  requireMerchantAccess,
  paymentController.getCustomerPaymentMethods
);

export default router;