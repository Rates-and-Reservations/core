import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';
import { BookingRateSnapshotCreateWithoutRateInputSchema } from './BookingRateSnapshotCreateWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutRateInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutRateInputSchema';

export const BookingRateSnapshotCreateOrConnectWithoutRateInputSchema: z.ZodType<Prisma.BookingRateSnapshotCreateOrConnectWithoutRateInput> = z.object({
  where: z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutRateInputSchema) ]),
}).strict();

export default BookingRateSnapshotCreateOrConnectWithoutRateInputSchema;
