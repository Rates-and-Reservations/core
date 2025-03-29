import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateWithoutBookingActionInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema';
import { BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema';
import { BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInputSchema } from './BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInputSchema';
import { BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema } from './BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInputSchema } from './BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInputSchema';
import { BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInputSchema } from './BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInputSchema';
import { BookingRequestActionValueScalarWhereInputSchema } from './BookingRequestActionValueScalarWhereInputSchema';

export const BookingRequestActionValueUpdateManyWithoutBookingActionNestedInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateManyWithoutBookingActionNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueCreateWithoutBookingActionInputSchema).array(),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestActionValueScalarWhereInputSchema),z.lazy(() => BookingRequestActionValueScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestActionValueUpdateManyWithoutBookingActionNestedInputSchema;
