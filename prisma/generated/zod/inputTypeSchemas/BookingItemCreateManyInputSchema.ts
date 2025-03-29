import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';

export const BookingItemCreateManyInputSchema: z.ZodType<Prisma.BookingItemCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  bookingId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  bookingRateSnapshotId: z.string(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingItemCreateManyInputSchema;
