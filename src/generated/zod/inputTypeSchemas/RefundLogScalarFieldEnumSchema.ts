import { z } from 'zod';

export const RefundLogScalarFieldEnumSchema = z.enum(['id','refundRequestId','paymentTransactionId','amount','currency','provider','providerRefundId','status','errorMessage','processedAt','createdAt','updatedAt']);

export default RefundLogScalarFieldEnumSchema;
