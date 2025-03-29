import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnCreateWithoutBookingInputSchema } from './BookingAddOnCreateWithoutBookingInputSchema';
import { BookingAddOnUncheckedCreateWithoutBookingInputSchema } from './BookingAddOnUncheckedCreateWithoutBookingInputSchema';
import { BookingAddOnCreateOrConnectWithoutBookingInputSchema } from './BookingAddOnCreateOrConnectWithoutBookingInputSchema';
import { BookingAddOnUpsertWithWhereUniqueWithoutBookingInputSchema } from './BookingAddOnUpsertWithWhereUniqueWithoutBookingInputSchema';
import { BookingAddOnCreateManyBookingInputEnvelopeSchema } from './BookingAddOnCreateManyBookingInputEnvelopeSchema';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnUpdateWithWhereUniqueWithoutBookingInputSchema } from './BookingAddOnUpdateWithWhereUniqueWithoutBookingInputSchema';
import { BookingAddOnUpdateManyWithWhereWithoutBookingInputSchema } from './BookingAddOnUpdateManyWithWhereWithoutBookingInputSchema';
import { BookingAddOnScalarWhereInputSchema } from './BookingAddOnScalarWhereInputSchema';

export const BookingAddOnUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.BookingAddOnUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutBookingInputSchema),z.lazy(() => BookingAddOnCreateWithoutBookingInputSchema).array(),z.lazy(() => BookingAddOnUncheckedCreateWithoutBookingInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingAddOnCreateOrConnectWithoutBookingInputSchema),z.lazy(() => BookingAddOnCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingAddOnUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => BookingAddOnUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingAddOnCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingAddOnUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => BookingAddOnUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingAddOnUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => BookingAddOnUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingAddOnScalarWhereInputSchema),z.lazy(() => BookingAddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingAddOnUpdateManyWithoutBookingNestedInputSchema;
