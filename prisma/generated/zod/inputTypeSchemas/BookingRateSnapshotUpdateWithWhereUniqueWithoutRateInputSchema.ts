import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';
import { BookingRateSnapshotUpdateWithoutRateInputSchema } from './BookingRateSnapshotUpdateWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedUpdateWithoutRateInputSchema } from './BookingRateSnapshotUncheckedUpdateWithoutRateInputSchema';

export const BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInputSchema: z.ZodType<Prisma.BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInput> = z.object({
  where: z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRateSnapshotUpdateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUncheckedUpdateWithoutRateInputSchema) ]),
}).strict();

export default BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInputSchema;
