import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotCountOutputTypeSelectSchema } from './BookingRateSnapshotCountOutputTypeSelectSchema';

export const BookingRateSnapshotCountOutputTypeArgsSchema: z.ZodType<Prisma.BookingRateSnapshotCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BookingRateSnapshotCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BookingRateSnapshotCountOutputTypeSelectSchema;
