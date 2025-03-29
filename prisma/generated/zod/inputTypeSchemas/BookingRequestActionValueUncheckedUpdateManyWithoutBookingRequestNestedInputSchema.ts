import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInputSchema } from './BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInputSchema';
import { BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema } from './BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInputSchema } from './BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInputSchema } from './BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInputSchema';
import { BookingRequestActionValueScalarWhereInputSchema } from './BookingRequestActionValueScalarWhereInputSchema';

export const BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueCreateWithoutBookingRequestInputSchema).array(),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestActionValueScalarWhereInputSchema),z.lazy(() => BookingRequestActionValueScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestNestedInputSchema;
