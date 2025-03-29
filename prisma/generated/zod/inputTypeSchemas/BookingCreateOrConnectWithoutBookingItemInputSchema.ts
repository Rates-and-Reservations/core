import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutBookingItemInputSchema } from './BookingCreateWithoutBookingItemInputSchema';
import { BookingUncheckedCreateWithoutBookingItemInputSchema } from './BookingUncheckedCreateWithoutBookingItemInputSchema';

export const BookingCreateOrConnectWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutBookingItemInputSchema;
