import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotSelectSchema } from '../inputTypeSchemas/BookingRateSnapshotSelectSchema';
import { BookingRateSnapshotIncludeSchema } from '../inputTypeSchemas/BookingRateSnapshotIncludeSchema';

export const BookingRateSnapshotArgsSchema: z.ZodType<Prisma.BookingRateSnapshotDefaultArgs> = z.object({
  select: z.lazy(() => BookingRateSnapshotSelectSchema).optional(),
  include: z.lazy(() => BookingRateSnapshotIncludeSchema).optional(),
}).strict();

export default BookingRateSnapshotArgsSchema;
