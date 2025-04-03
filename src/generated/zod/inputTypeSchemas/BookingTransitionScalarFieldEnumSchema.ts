import { z } from 'zod';

export const BookingTransitionScalarFieldEnumSchema = z.enum(['id','bookingId','fromStatus','toStatus','reason','notes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingTransitionScalarFieldEnumSchema;
