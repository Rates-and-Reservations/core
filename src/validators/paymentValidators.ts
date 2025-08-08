import { z } from 'zod';
import { PaymentStatus } from '@prisma/client';

export const createPaymentIntentSchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  amount: z.number().min(0.5, 'Amount must be at least $0.50').max(999999, 'Amount too large'),
  currency: z.string().length(3, 'Currency must be a 3-letter ISO code').default('USD'),
  customerId: z.string().optional(),
  automaticPaymentMethods: z.boolean().default(true),
  captureMethod: z.enum(['automatic', 'manual']).default('automatic'),
  description: z.string().max(200).optional(),
});

export const createRefundSchema = z.object({
  paymentActionId: z.string().min(1, 'Payment action ID is required'),
  amount: z.number().min(0.01).optional(),
  reason: z.enum(['duplicate', 'fraudulent', 'requested_by_customer']).default('requested_by_customer'),
  refundApplicationFee: z.boolean().default(false),
});

export const paymentHistoryQuerySchema = z.object({
  page: z.string().optional().default('1').transform(val => parseInt(val)),
  limit: z.string().optional().default('20').transform(val => parseInt(val)),
  status: z.nativeEnum(PaymentStatus).optional(),
  startDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  endDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
}).refine(data => data.limit <= 100, {
  message: 'Limit cannot exceed 100',
  path: ['limit'],
}).refine(data => {
  if (data.startDate && data.endDate) {
    return data.endDate >= data.startDate;
  }
  return true;
}, {
  message: 'End date must be after or equal to start date',
  path: ['endDate'],
});

export const merchantPayoutQuerySchema = z.object({
  period: z.enum(['daily', 'weekly', 'monthly']).default('monthly'),
});

export const retryPaymentSchema = z.object({
  // This can be expanded if we need additional retry parameters
});

export const updatePaymentMethodSchema = z.object({
  paymentMethodId: z.string().min(1, 'Payment method ID is required'),
});

export const webhookSignatureSchema = z.object({
  signature: z.string().min(1, 'Stripe signature is required'),
  payload: z.any(), // This will be the raw request body
});

// Advanced payment filtering for analytics
export const paymentAnalyticsSchema = z.object({
  startDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  endDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  groupBy: z.enum(['day', 'week', 'month']).optional().default('day'),
  includeTrends: z.string().optional().transform(val => val === 'true'),
  includeMethodBreakdown: z.string().optional().transform(val => val === 'true'),
}).refine(data => {
  if (data.startDate && data.endDate) {
    const daysDiff = (data.endDate.getTime() - data.startDate.getTime()) / (1000 * 60 * 60 * 24);
    return daysDiff <= 365; // Max 1 year range
  }
  return true;
}, {
  message: 'Date range cannot exceed 365 days',
  path: ['endDate'],
});

// Payment method validation
export const savePaymentMethodSchema = z.object({
  customerId: z.string().min(1, 'Customer ID is required'),
  paymentMethodId: z.string().min(1, 'Payment method ID is required'),
  setAsDefault: z.boolean().default(false),
});

export const removePaymentMethodSchema = z.object({
  paymentMethodId: z.string().min(1, 'Payment method ID is required'),
});

// Subscription payment schemas (for future use)
export const createSubscriptionSchema = z.object({
  customerId: z.string().min(1, 'Customer ID is required'),
  priceId: z.string().min(1, 'Price ID is required'),
  paymentMethodId: z.string().optional(),
  couponId: z.string().optional(),
  trialPeriodDays: z.number().int().min(0).max(365).optional(),
  metadata: z.record(z.string()).optional(),
});

export const updateSubscriptionSchema = z.object({
  priceId: z.string().optional(),
  quantity: z.number().int().min(1).optional(),
  couponId: z.string().optional(),
  prorationBehavior: z.enum(['create_prorations', 'none', 'always_invoice']).optional(),
});

// Dispute handling schemas
export const submitDisputeEvidenceSchema = z.object({
  disputeId: z.string().min(1, 'Dispute ID is required'),
  evidence: z.object({
    customerCommunication: z.string().optional(),
    receipt: z.string().optional(),
    serviceDocumentation: z.string().optional(),
    shippingDocumentation: z.string().optional(),
    uncategorizedFile: z.string().optional(),
    uncategorizedText: z.string().optional(),
  }),
  metadata: z.record(z.string()).optional(),
});

// Multi-party payment split schemas (for marketplace)
export const createTransferSchema = z.object({
  amount: z.number().min(1, 'Amount must be positive'),
  currency: z.string().length(3),
  destination: z.string().min(1, 'Destination account ID is required'),
  sourceTransaction: z.string().optional(),
  description: z.string().max(200).optional(),
  metadata: z.record(z.string()).optional(),
});

// Payment intent confirmation with setup future usage
export const confirmPaymentIntentSchema = z.object({
  paymentIntentId: z.string().min(1, 'Payment intent ID is required'),
  paymentMethodId: z.string().optional(),
  setupFutureUsage: z.enum(['on_session', 'off_session']).optional(),
  returnUrl: z.string().url().optional(),
});

// Partial capture for manual payment intents
export const capturePaymentSchema = z.object({
  paymentIntentId: z.string().min(1, 'Payment intent ID is required'),
  amount: z.number().min(1).optional(), // If not provided, captures full amount
  applicationFeeAmount: z.number().min(0).optional(),
  metadata: z.record(z.string()).optional(),
});

// Connect account (for marketplace) schemas
export const createConnectAccountSchema = z.object({
  type: z.enum(['express', 'standard', 'custom']).default('express'),
  country: z.string().length(2, 'Country must be a 2-letter ISO code'),
  email: z.string().email().optional(),
  businessType: z.enum(['individual', 'company']).optional(),
  capabilities: z.object({
    card_payments: z.object({ requested: z.boolean() }).optional(),
    transfers: z.object({ requested: z.boolean() }).optional(),
  }).optional(),
  metadata: z.record(z.string()).optional(),
});

// Payout schemas
export const createPayoutSchema = z.object({
  amount: z.number().min(1, 'Amount must be positive'),
  currency: z.string().length(3),
  method: z.enum(['instant', 'standard']).default('standard'),
  destination: z.string().optional(), // Bank account or debit card ID
  description: z.string().max(200).optional(),
  metadata: z.record(z.string()).optional(),
});

// Installment payment schemas (for future booking payments)
export const createInstallmentPlanSchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  totalAmount: z.number().min(1, 'Total amount must be positive'),
  currency: z.string().length(3).default('USD'),
  installments: z.array(z.object({
    amount: z.number().min(1),
    dueDate: z.string().datetime().transform(val => new Date(val)),
    description: z.string().optional(),
  })).min(2, 'Must have at least 2 installments').max(12, 'Cannot exceed 12 installments'),
  firstPaymentImmediate: z.boolean().default(true),
  lateFeeAmount: z.number().min(0).optional(),
  lateFeeGracePeriodDays: z.number().int().min(0).max(30).default(3),
}).refine(data => {
  const totalInstallments = data.installments.reduce((sum, inst) => sum + inst.amount, 0);
  return Math.abs(totalInstallments - data.totalAmount) < 0.01; // Allow for small rounding differences
}, {
  message: 'Sum of installment amounts must equal total amount',
  path: ['installments'],
}).refine(data => {
  // Check that due dates are in chronological order
  const sortedDates = data.installments.map(inst => inst.dueDate.getTime()).sort();
  const originalDates = data.installments.map(inst => inst.dueDate.getTime());
  return JSON.stringify(sortedDates) === JSON.stringify(originalDates);
}, {
  message: 'Installment due dates must be in chronological order',
  path: ['installments'],
});

// Payment link schemas (for sending payment requests)
export const createPaymentLinkSchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  amount: z.number().min(0.5),
  currency: z.string().length(3).default('USD'),
  description: z.string().max(200).optional(),
  expiresAt: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  collectShippingAddress: z.boolean().default(false),
  allowPromotionCodes: z.boolean().default(false),
  customFields: z.array(z.object({
    key: z.string().min(1).max(50),
    label: z.object({
      type: z.literal('custom'),
      custom: z.string().min(1).max(50),
    }),
    type: z.enum(['dropdown', 'numeric', 'text']),
    optional: z.boolean().default(false),
  })).optional(),
  metadata: z.record(z.string()).optional(),
}).refine(data => {
  if (data.expiresAt) {
    return data.expiresAt > new Date();
  }
  return true;
}, {
  message: 'Expiration date must be in the future',
  path: ['expiresAt'],
});

// Bank account verification schemas
export const verifyBankAccountSchema = z.object({
  bankAccountId: z.string().min(1, 'Bank account ID is required'),
  amounts: z.array(z.number().int().min(1).max(99)).length(2, 'Must provide exactly 2 micro-deposit amounts'),
});

// Tax calculation schemas
export const calculateTaxSchema = z.object({
  amount: z.number().min(0.01, 'Amount must be positive'),
  currency: z.string().length(3),
  customerAddress: z.object({
    line1: z.string().min(1),
    line2: z.string().optional(),
    city: z.string().min(1),
    state: z.string().optional(),
    postalCode: z.string().min(1),
    country: z.string().length(2),
  }),
  expand: z.array(z.string()).optional(),
});

// Financial reporting schemas
export const generateReportSchema = z.object({
  reportType: z.enum(['payments', 'refunds', 'disputes', 'payouts', 'fees']),
  startDate: z.string().datetime().transform(val => new Date(val)),
  endDate: z.string().datetime().transform(val => new Date(val)),
  format: z.enum(['csv', 'json', 'pdf']).default('csv'),
  includeDetails: z.boolean().default(false),
  groupBy: z.enum(['day', 'week', 'month']).optional(),
  filters: z.object({
    status: z.array(z.nativeEnum(PaymentStatus)).optional(),
    paymentMethods: z.array(z.string()).optional(),
    amountRange: z.object({
      min: z.number().min(0).optional(),
      max: z.number().min(0).optional(),
    }).optional(),
    customerIds: z.array(z.string()).optional(),
  }).optional(),
}).refine(data => {
  return data.endDate > data.startDate;
}, {
  message: 'End date must be after start date',
  path: ['endDate'],
}).refine(data => {
  const daysDiff = (data.endDate.getTime() - data.startDate.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff <= 365;
}, {
  message: 'Date range cannot exceed 365 days',
  path: ['endDate'],
});

// Recurring payment schemas
export const createRecurringPaymentSchema = z.object({
  customerId: z.string().min(1, 'Customer ID is required'),
  amount: z.number().min(0.5),
  currency: z.string().length(3).default('USD'),
  interval: z.enum(['day', 'week', 'month', 'year']),
  intervalCount: z.number().int().min(1).max(365).default(1),
  startDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  endDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  maxOccurrences: z.number().int().min(1).optional(),
  description: z.string().max(200).optional(),
  metadata: z.record(z.string()).optional(),
}).refine(data => {
  if (data.startDate && data.endDate) {
    return data.endDate > data.startDate;
  }
  return true;
}, {
  message: 'End date must be after start date',
  path: ['endDate'],
});

// Payment method requirement validation
export const paymentMethodRequirementSchema = z.object({
  country: z.string().length(2),
  paymentMethodType: z.enum(['card', 'bank_transfer', 'wallet']),
  amount: z.number().min(1),
  currency: z.string().length(3),
});

// Custom validation functions
export const validateCurrency = (currency: string, country?: string): boolean => {
  const currencyCountryMap: Record<string, string[]> = {
    'USD': ['US', 'EC', 'SV', 'PA', 'ZW'],
    'EUR': ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'],
    'GBP': ['GB'],
    'CAD': ['CA'],
    'AUD': ['AU'],
    'JPY': ['JP'],
    // Add more mappings as needed
  };

  if (!country) return true; // Skip validation if no country provided
  
  const allowedCountries = currencyCountryMap[currency.toUpperCase()];
  return allowedCountries ? allowedCountries.includes(country.toUpperCase()) : true;
};

export const validatePaymentAmount = (amount: number, currency: string): boolean => {
  const minimumAmounts: Record<string, number> = {
    'USD': 0.50,
    'EUR': 0.50,
    'GBP': 0.30,
    'CAD': 0.50,
    'AUD': 0.50,
    'JPY': 50,
    // Add more currencies as needed
  };

  const minimum = minimumAmounts[currency.toUpperCase()] || 0.50;
  return amount >= minimum;
};

// Export all schemas
export default {
  createPaymentIntentSchema,
  createRefundSchema,
  paymentHistoryQuerySchema,
  merchantPayoutQuerySchema,
  retryPaymentSchema,
  updatePaymentMethodSchema,
  webhookSignatureSchema,
  paymentAnalyticsSchema,
  savePaymentMethodSchema,
  removePaymentMethodSchema,
  createSubscriptionSchema,
  updateSubscriptionSchema,
  submitDisputeEvidenceSchema,
  createTransferSchema,
  confirmPaymentIntentSchema,
  capturePaymentSchema,
  createConnectAccountSchema,
  createPayoutSchema,
  createInstallmentPlanSchema,
  createPaymentLinkSchema,
  verifyBankAccountSchema,
  calculateTaxSchema,
  generateReportSchema,
  createRecurringPaymentSchema,
  paymentMethodRequirementSchema,
  validateCurrency,
  validatePaymentAmount,
};