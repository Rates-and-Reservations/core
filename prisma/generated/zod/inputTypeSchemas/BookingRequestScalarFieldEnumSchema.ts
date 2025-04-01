import { z } from 'zod';

export const BookingRequestScalarFieldEnumSchema = z.enum(['id','merchantId','prefilledFields','customerId','resourceId','templateId','expiresAt','isActive','notes','status','actionStatus','finalizedSnapshot','createdAt','updatedAt']);

export default BookingRequestScalarFieldEnumSchema;
