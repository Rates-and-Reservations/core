import { z } from 'zod';

export const CancellationRequestScalarFieldEnumSchema = z.enum(['id','bookingId','bookingItemId','requestedBy','reason','source','status','processedAt','approvedBy','approvedAt','declinedAt','refundAmount','notes','createdAt','updatedAt']);

export default CancellationRequestScalarFieldEnumSchema;
