import { z } from 'zod';

export const BookingStatusSchema = z.enum(['PENDING','CONFIRMED','CANCELLED','COMPLETED','NO_SHOW']);

export type BookingStatusType = `${z.infer<typeof BookingStatusSchema>}`

export default BookingStatusSchema;
