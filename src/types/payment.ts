export interface CreatePaymentIntentData {
  bookingId: string;
  merchantId: string;
  amount: number; // in cents
  currency: string;
  customerId?: string;
  customerEmail?: string;
  automaticPaymentMethods?: boolean;
  captureMethod?: 'automatic' | 'manual';
  description?: string;
  metadata?: Record<string, string>;
}

export interface PaymentIntentResult {
  paymentIntentId: string;
  clientSecret: string;
  status: string;
  amount: number;
  currency: string;
}

export interface ProcessWebhookData {
  signature: string;
  payload: string | Buffer;
}

export interface RefundPaymentData {
  paymentActionId: string;
  amount?: number; // Optional - full refund if not specified
  reason?: 'duplicate' | 'fraudulent' | 'requested_by_customer';
  refundApplicationFee?: boolean;
}

export interface PaymentAnalytics {
  totalPayments: number;
  successfulPayments: number;
  failedPayments: number;
  successRate: number;
  totalRevenue: number;
  totalRefunded: number;
  netRevenue: number;
}