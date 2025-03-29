import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateWithoutBookingRateSnapshotInputSchema';
import { BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema';
import { BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema';
import { BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInputSchema } from './BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInputSchema';
import { BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema } from './BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInputSchema } from './BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInputSchema';
import { BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInputSchema } from './BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInputSchema';
import { BookingItemScalarWhereInputSchema } from './BookingItemScalarWhereInputSchema';

export const BookingItemUpdateManyWithoutBookingRateSnapshotNestedInputSchema: z.ZodType<Prisma.BookingItemUpdateManyWithoutBookingRateSnapshotNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemCreateWithoutBookingRateSnapshotInputSchema).array(),z.lazy(() => BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingItemScalarWhereInputSchema),z.lazy(() => BookingItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingItemUpdateManyWithoutBookingRateSnapshotNestedInputSchema;
