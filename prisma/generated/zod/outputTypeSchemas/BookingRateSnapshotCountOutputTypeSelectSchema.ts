import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookingRateSnapshotCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingRateSnapshotCountOutputTypeSelect> = z.object({
  BookingItem: z.boolean().optional(),
}).strict();

export default BookingRateSnapshotCountOutputTypeSelectSchema;
