import { z } from 'zod';

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

/**
 * Review: Customer reviews and ratings for bookings
 * @group Review
 */
export const ReviewSchema = z.object({
  id: z.string().cuid(),
  bookingId: z.string(),
  customerId: z.string(),
  rating: z.number().int(),
  title: z.string().nullable(),
  comment: z.string().nullable(),
  isPublic: z.boolean(),
  merchantResponse: z.string().nullable(),
  respondedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Review = z.infer<typeof ReviewSchema>

export default ReviewSchema;
