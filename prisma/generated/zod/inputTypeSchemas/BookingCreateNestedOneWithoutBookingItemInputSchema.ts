import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingItemInputSchema } from './BookingCreateWithoutBookingItemInputSchema';
import { BookingUncheckedCreateWithoutBookingItemInputSchema } from './BookingUncheckedCreateWithoutBookingItemInputSchema';
import { BookingCreateOrConnectWithoutBookingItemInputSchema } from './BookingCreateOrConnectWithoutBookingItemInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutBookingItemInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutBookingItemInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutBookingItemInputSchema;
