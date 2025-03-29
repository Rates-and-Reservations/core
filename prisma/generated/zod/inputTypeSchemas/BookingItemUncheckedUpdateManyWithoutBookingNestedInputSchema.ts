import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutBookingInputSchema } from './BookingItemCreateWithoutBookingInputSchema';
import { BookingItemUncheckedCreateWithoutBookingInputSchema } from './BookingItemUncheckedCreateWithoutBookingInputSchema';
import { BookingItemCreateOrConnectWithoutBookingInputSchema } from './BookingItemCreateOrConnectWithoutBookingInputSchema';
import { BookingItemUpsertWithWhereUniqueWithoutBookingInputSchema } from './BookingItemUpsertWithWhereUniqueWithoutBookingInputSchema';
import { BookingItemCreateManyBookingInputEnvelopeSchema } from './BookingItemCreateManyBookingInputEnvelopeSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateWithWhereUniqueWithoutBookingInputSchema } from './BookingItemUpdateWithWhereUniqueWithoutBookingInputSchema';
import { BookingItemUpdateManyWithWhereWithoutBookingInputSchema } from './BookingItemUpdateManyWithWhereWithoutBookingInputSchema';
import { BookingItemScalarWhereInputSchema } from './BookingItemScalarWhereInputSchema';

export const BookingItemUncheckedUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.BookingItemUncheckedUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingInputSchema),z.lazy(() => BookingItemCreateWithoutBookingInputSchema).array(),z.lazy(() => BookingItemUncheckedCreateWithoutBookingInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemCreateOrConnectWithoutBookingInputSchema),z.lazy(() => BookingItemCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingItemUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => BookingItemUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingItemUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => BookingItemUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingItemUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => BookingItemUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingItemScalarWhereInputSchema),z.lazy(() => BookingItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingItemUncheckedUpdateManyWithoutBookingNestedInputSchema;
