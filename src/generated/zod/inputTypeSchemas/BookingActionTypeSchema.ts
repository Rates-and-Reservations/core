import { z } from 'zod';

export const BookingActionTypeSchema = z.enum(['CREATED','UPDATED','CANCELLED','STATUS_CHANGED','PAYMENT_UPDATED','CUSTOMER_NOTIFIED','REFUNDED']);

export type BookingActionTypeType = `${z.infer<typeof BookingActionTypeSchema>}`

export default BookingActionTypeSchema;
