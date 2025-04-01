import { z } from 'zod';

export const BookingAddOnScalarFieldEnumSchema = z.enum(['id','bookingId','addOnId','addOnName','quantity','unitPrice','totalPrice','createdAt','updatedAt']);

export default BookingAddOnScalarFieldEnumSchema;
