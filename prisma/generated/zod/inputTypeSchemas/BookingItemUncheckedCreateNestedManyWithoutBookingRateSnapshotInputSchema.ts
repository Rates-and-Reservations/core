import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateWithoutBookingRateSnapshotInputSchema';
import { BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema';
import { BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema';
import { BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema } from './BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';

export const BookingItemUncheckedCreateNestedManyWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemUncheckedCreateNestedManyWithoutBookingRateSnapshotInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemCreateWithoutBookingRateSnapshotInputSchema).array(),z.lazy(() => BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingItemUncheckedCreateNestedManyWithoutBookingRateSnapshotInputSchema;
