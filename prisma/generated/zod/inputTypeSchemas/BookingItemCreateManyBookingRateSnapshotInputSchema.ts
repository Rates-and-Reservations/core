import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';

export const BookingItemCreateManyBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemCreateManyBookingRateSnapshotInput> = z.object({
  id: z.string().cuid().optional(),
  bookingId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingItemCreateManyBookingRateSnapshotInputSchema;
