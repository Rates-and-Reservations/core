import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnCreateWithoutBookingItemInputSchema } from './BookingItemAddOnCreateWithoutBookingItemInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema } from './BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema';
import { BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInputSchema } from './BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema } from './BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInputSchema } from './BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInputSchema';
import { BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInputSchema } from './BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInputSchema';
import { BookingItemAddOnScalarWhereInputSchema } from './BookingItemAddOnScalarWhereInputSchema';

export const BookingItemAddOnUpdateManyWithoutBookingItemNestedInputSchema: z.ZodType<Prisma.BookingItemAddOnUpdateManyWithoutBookingItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnCreateWithoutBookingItemInputSchema).array(),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingItemAddOnScalarWhereInputSchema),z.lazy(() => BookingItemAddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingItemAddOnUpdateManyWithoutBookingItemNestedInputSchema;
