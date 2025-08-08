import { z } from 'zod';

export const BookingActionTypeSchema = z.enum(['CREATED','UPDATED','CANCELLED','STATUS_CHANGED','PAYMENT_UPDATED','CUSTOMER_NOTIFIED','REFUNDED','CHECKED_IN','CHECKED_OUT','NO_SHOW_MARKED']);

export type BookingActionTypeType = `${z.infer<typeof BookingActionTypeSchema>}`

export default BookingActionTypeSchema;
