import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema';
import { BookingRateSnapshotUpsertWithoutBookingItemInputSchema } from './BookingRateSnapshotUpsertWithoutBookingItemInputSchema';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';
import { BookingRateSnapshotUpdateToOneWithWhereWithoutBookingItemInputSchema } from './BookingRateSnapshotUpdateToOneWithWhereWithoutBookingItemInputSchema';
import { BookingRateSnapshotUpdateWithoutBookingItemInputSchema } from './BookingRateSnapshotUpdateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema';

export const BookingRateSnapshotUpdateOneRequiredWithoutBookingItemNestedInputSchema: z.ZodType<Prisma.BookingRateSnapshotUpdateOneRequiredWithoutBookingItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema).optional(),
  upsert: z.lazy(() => BookingRateSnapshotUpsertWithoutBookingItemInputSchema).optional(),
  connect: z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingRateSnapshotUpdateToOneWithWhereWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema) ]).optional(),
}).strict();

export default BookingRateSnapshotUpdateOneRequiredWithoutBookingItemNestedInputSchema;
