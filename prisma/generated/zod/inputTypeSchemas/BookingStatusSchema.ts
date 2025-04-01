import { z } from 'zod';

export const BookingStatusSchema = z.enum(['PENDING','CONFIRMED','CANCELLED','COMPLETED']);

export type BookingStatusType = `${z.infer<typeof BookingStatusSchema>}`

export default BookingStatusSchema;
