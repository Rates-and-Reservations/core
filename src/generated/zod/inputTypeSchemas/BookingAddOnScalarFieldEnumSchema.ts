import { z } from 'zod';

export const BookingAddOnScalarFieldEnumSchema = z.enum(['id','bookingId','addOnId','addOnName','quantity','unitPrice','totalPrice','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingAddOnScalarFieldEnumSchema;
