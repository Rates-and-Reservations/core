import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';
import { BookingRateSnapshotUpdateWithoutRateInputSchema } from './BookingRateSnapshotUpdateWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedUpdateWithoutRateInputSchema } from './BookingRateSnapshotUncheckedUpdateWithoutRateInputSchema';
import { BookingRateSnapshotCreateWithoutRateInputSchema } from './BookingRateSnapshotCreateWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutRateInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutRateInputSchema';

export const BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInputSchema: z.ZodType<Prisma.BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInput> = z.object({
  where: z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRateSnapshotUpdateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUncheckedUpdateWithoutRateInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutRateInputSchema) ]),
}).strict();

export default BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInputSchema;
