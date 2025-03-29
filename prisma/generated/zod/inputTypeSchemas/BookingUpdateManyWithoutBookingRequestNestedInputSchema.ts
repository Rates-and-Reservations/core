import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingRequestInputSchema } from './BookingCreateWithoutBookingRequestInputSchema';
import { BookingUncheckedCreateWithoutBookingRequestInputSchema } from './BookingUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingCreateOrConnectWithoutBookingRequestInputSchema } from './BookingCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingUpsertWithWhereUniqueWithoutBookingRequestInputSchema } from './BookingUpsertWithWhereUniqueWithoutBookingRequestInputSchema';
import { BookingCreateManyBookingRequestInputEnvelopeSchema } from './BookingCreateManyBookingRequestInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutBookingRequestInputSchema } from './BookingUpdateWithWhereUniqueWithoutBookingRequestInputSchema';
import { BookingUpdateManyWithWhereWithoutBookingRequestInputSchema } from './BookingUpdateManyWithWhereWithoutBookingRequestInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUpdateManyWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingCreateWithoutBookingRequestInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutBookingRequestInputSchema),z.lazy(() => BookingCreateOrConnectWithoutBookingRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutBookingRequestInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutBookingRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyBookingRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutBookingRequestInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutBookingRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutBookingRequestInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutBookingRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUpdateManyWithoutBookingRequestNestedInputSchema;
