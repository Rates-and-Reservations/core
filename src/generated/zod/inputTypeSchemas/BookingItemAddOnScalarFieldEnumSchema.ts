import { z } from 'zod';

export const BookingItemAddOnScalarFieldEnumSchema = z.enum(['id','bookingItemId','addOnId','addOnName','unitPrice','quantity','totalPrice','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingItemAddOnScalarFieldEnumSchema;
