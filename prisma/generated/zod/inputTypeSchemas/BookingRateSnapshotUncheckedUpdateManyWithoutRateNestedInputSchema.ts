import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotCreateWithoutRateInputSchema } from './BookingRateSnapshotCreateWithoutRateInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutRateInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutRateInputSchema';
import { BookingRateSnapshotCreateOrConnectWithoutRateInputSchema } from './BookingRateSnapshotCreateOrConnectWithoutRateInputSchema';
import { BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInputSchema } from './BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInputSchema';
import { BookingRateSnapshotCreateManyRateInputEnvelopeSchema } from './BookingRateSnapshotCreateManyRateInputEnvelopeSchema';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';
import { BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInputSchema } from './BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInputSchema';
import { BookingRateSnapshotUpdateManyWithWhereWithoutRateInputSchema } from './BookingRateSnapshotUpdateManyWithWhereWithoutRateInputSchema';
import { BookingRateSnapshotScalarWhereInputSchema } from './BookingRateSnapshotScalarWhereInputSchema';

export const BookingRateSnapshotUncheckedUpdateManyWithoutRateNestedInputSchema: z.ZodType<Prisma.BookingRateSnapshotUncheckedUpdateManyWithoutRateNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotCreateWithoutRateInputSchema).array(),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutRateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRateSnapshotCreateOrConnectWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotCreateOrConnectWithoutRateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUpsertWithWhereUniqueWithoutRateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRateSnapshotCreateManyRateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUpdateWithWhereUniqueWithoutRateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRateSnapshotUpdateManyWithWhereWithoutRateInputSchema),z.lazy(() => BookingRateSnapshotUpdateManyWithWhereWithoutRateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRateSnapshotScalarWhereInputSchema),z.lazy(() => BookingRateSnapshotScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRateSnapshotUncheckedUpdateManyWithoutRateNestedInputSchema;
