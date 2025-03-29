import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogCreateWithoutBookingInputSchema } from './BookingActivityLogCreateWithoutBookingInputSchema';
import { BookingActivityLogUncheckedCreateWithoutBookingInputSchema } from './BookingActivityLogUncheckedCreateWithoutBookingInputSchema';
import { BookingActivityLogCreateOrConnectWithoutBookingInputSchema } from './BookingActivityLogCreateOrConnectWithoutBookingInputSchema';
import { BookingActivityLogUpsertWithWhereUniqueWithoutBookingInputSchema } from './BookingActivityLogUpsertWithWhereUniqueWithoutBookingInputSchema';
import { BookingActivityLogCreateManyBookingInputEnvelopeSchema } from './BookingActivityLogCreateManyBookingInputEnvelopeSchema';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogUpdateWithWhereUniqueWithoutBookingInputSchema } from './BookingActivityLogUpdateWithWhereUniqueWithoutBookingInputSchema';
import { BookingActivityLogUpdateManyWithWhereWithoutBookingInputSchema } from './BookingActivityLogUpdateManyWithWhereWithoutBookingInputSchema';
import { BookingActivityLogScalarWhereInputSchema } from './BookingActivityLogScalarWhereInputSchema';

export const BookingActivityLogUncheckedUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.BookingActivityLogUncheckedUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogCreateWithoutBookingInputSchema).array(),z.lazy(() => BookingActivityLogUncheckedCreateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingActivityLogCreateOrConnectWithoutBookingInputSchema),z.lazy(() => BookingActivityLogCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingActivityLogUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingActivityLogCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingActivityLogUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingActivityLogUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingActivityLogScalarWhereInputSchema),z.lazy(() => BookingActivityLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingActivityLogUncheckedUpdateManyWithoutBookingNestedInputSchema;
