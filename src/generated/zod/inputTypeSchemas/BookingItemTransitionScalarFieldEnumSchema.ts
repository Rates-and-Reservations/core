import { z } from 'zod';

export const BookingItemTransitionScalarFieldEnumSchema = z.enum(['id','bookingItemId','fromStatus','toStatus','reason','notes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingItemTransitionScalarFieldEnumSchema;
