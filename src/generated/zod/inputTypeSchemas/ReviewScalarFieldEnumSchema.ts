import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id','bookingId','customerId','rating','title','comment','isPublic','merchantResponse','respondedAt','createdAt','updatedAt']);

export default ReviewScalarFieldEnumSchema;
