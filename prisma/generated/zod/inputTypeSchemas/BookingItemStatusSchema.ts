import { z } from 'zod';

export const BookingItemStatusSchema = z.enum(['PENDING','CONFIRMED','CANCELLED','COMPLETED','FAILED','WAITLISTED','IN_USE']);

export type BookingItemStatusType = `${z.infer<typeof BookingItemStatusSchema>}`

export default BookingItemStatusSchema;
