import { z } from 'zod';

export const PaymentActionsScalarFieldEnumSchema = z.enum(['id','bookingId','merchantId','provider','providerPaymentId','amount','currency','status','refundedAmount','paymentMethod','isDeleted','deletedAt','createdAt','updatedAt']);

export default PaymentActionsScalarFieldEnumSchema;
