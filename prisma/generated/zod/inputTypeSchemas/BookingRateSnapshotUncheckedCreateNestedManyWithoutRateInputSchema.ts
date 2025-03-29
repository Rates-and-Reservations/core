import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotCreateWithoutRateInputSchema } from './BookingRateSnapshotCreateWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutRateInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutRateInputSchema';
import { BookingRateSnapshotCreateOrConnectWithoutRateInputSchema } from './BookingRateSnapshotCreateOrConnectWithoutRateInputSchema';
import { BookingRateSnapshotCreateManyRateInputEnvelopeSchema } from './BookingRateSnapshotCreateManyRateInputEnvelopeSchema';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';

export const BookingRateSnapshotUncheckedCreateNestedManyWithoutRateInputSchema: z.ZodType<Prisma.BookingRateSnapshotUncheckedCreateNestedManyWithoutRateInput> = z.object({
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotCreateWithoutRateInputSchema).array(),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutRateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRateSnapshotCreateOrConnectWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotCreateOrConnectWithoutRateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRateSnapshotCreateManyRateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRateSnapshotUncheckedCreateNestedManyWithoutRateInputSchema;
