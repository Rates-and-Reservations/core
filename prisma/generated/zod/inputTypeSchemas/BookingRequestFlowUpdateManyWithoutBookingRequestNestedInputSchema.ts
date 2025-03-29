import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateWithoutBookingRequestInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInputSchema } from './BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInputSchema';
import { BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema } from './BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInputSchema } from './BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInputSchema';
import { BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInputSchema } from './BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInputSchema';
import { BookingRequestFlowScalarWhereInputSchema } from './BookingRequestFlowScalarWhereInputSchema';

export const BookingRequestFlowUpdateManyWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowCreateWithoutBookingRequestInputSchema).array(),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestFlowScalarWhereInputSchema),z.lazy(() => BookingRequestFlowScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestFlowUpdateManyWithoutBookingRequestNestedInputSchema;
