import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotScalarWhereInputSchema } from './BookingRateSnapshotScalarWhereInputSchema';
import { BookingRateSnapshotUpdateManyMutationInputSchema } from './BookingRateSnapshotUpdateManyMutationInputSchema';
import { BookingRateSnapshotUncheckedUpdateManyWithoutRateInputSchema } from './BookingRateSnapshotUncheckedUpdateManyWithoutRateInputSchema';

export const BookingRateSnapshotUpdateManyWithWhereWithoutRateInputSchema: z.ZodType<Prisma.BookingRateSnapshotUpdateManyWithWhereWithoutRateInput> = z.object({
  where: z.lazy(() => BookingRateSnapshotScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRateSnapshotUpdateManyMutationInputSchema),z.lazy(() => BookingRateSnapshotUncheckedUpdateManyWithoutRateInputSchema) ]),
}).strict();

export default BookingRateSnapshotUpdateManyWithWhereWithoutRateInputSchema;
