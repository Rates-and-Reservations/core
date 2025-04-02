import { z } from 'zod';

export const BookingItemAddOnScalarFieldEnumSchema = z.enum(['id','bookingItemId','addOnId','addOnName','unitPrice','quantity','totalPrice','createdAt','updatedAt']);

export default BookingItemAddOnScalarFieldEnumSchema;
