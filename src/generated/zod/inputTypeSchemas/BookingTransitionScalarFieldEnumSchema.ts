import { z } from 'zod';

export const BookingTransitionScalarFieldEnumSchema = z.enum(['id','bookingId','status','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingTransitionScalarFieldEnumSchema;
