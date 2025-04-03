import { z } from 'zod';

export const BookingItemTransitionScalarFieldEnumSchema = z.enum(['id','bookingItemId','status','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingItemTransitionScalarFieldEnumSchema;
