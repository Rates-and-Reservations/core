import { z } from 'zod';

export const RefundRequestScalarFieldEnumSchema = z.enum(['id','merchantId','bookingId','paymentTransactionId','amount','currency','reason','status','approvedBy','approvedAt','rejectedAt','requestedBy','requestedAt','processedAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default RefundRequestScalarFieldEnumSchema;
