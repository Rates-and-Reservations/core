import { z } from 'zod';

export const BookingItemStatusSchema = z.enum(['PENDING','CONFIRMED','CANCELLED','COMPLETED','FAILED','WAITLISTED','IN_USE','NO_SHOW']);

export type BookingItemStatusType = `${z.infer<typeof BookingItemStatusSchema>}`

export default BookingItemStatusSchema;
