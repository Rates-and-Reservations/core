import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutBookingInputSchema } from './BookingItemCreateWithoutBookingInputSchema';
import { BookingItemUncheckedCreateWithoutBookingInputSchema } from './BookingItemUncheckedCreateWithoutBookingInputSchema';
import { BookingItemCreateOrConnectWithoutBookingInputSchema } from './BookingItemCreateOrConnectWithoutBookingInputSchema';
import { BookingItemCreateManyBookingInputEnvelopeSchema } from './BookingItemCreateManyBookingInputEnvelopeSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';

export const BookingItemCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingInputSchema),z.lazy(() => BookingItemCreateWithoutBookingInputSchema).array(),z.lazy(() => BookingItemUncheckedCreateWithoutBookingInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemCreateOrConnectWithoutBookingInputSchema),z.lazy(() => BookingItemCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingItemWhereUniqueInputSchema),z.lazy(() => BookingItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingItemCreateNestedManyWithoutBookingInputSchema;
