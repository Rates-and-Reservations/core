import { z } from 'zod';

export const CancellationRequestScalarFieldEnumSchema = z.enum(['id','bookingId','bookingItemId','requestedBy','reason','source','currentStatus','processedAt','approvedBy','approvedAt','declinedAt','refundAmount','notes','isDeleted','deletedAt','createdAt','updatedAt']);

export default CancellationRequestScalarFieldEnumSchema;
