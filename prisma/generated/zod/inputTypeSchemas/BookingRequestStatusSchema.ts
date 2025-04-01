import { z } from 'zod';

export const BookingRequestStatusSchema = z.enum(['INITIATED','IN_PROGRESS','COMPLETED','FAILED']);

export type BookingRequestStatusType = `${z.infer<typeof BookingRequestStatusSchema>}`

export default BookingRequestStatusSchema;
