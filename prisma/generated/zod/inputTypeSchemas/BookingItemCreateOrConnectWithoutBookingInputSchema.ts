import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemCreateWithoutBookingInputSchema } from './BookingItemCreateWithoutBookingInputSchema';
import { BookingItemUncheckedCreateWithoutBookingInputSchema } from './BookingItemUncheckedCreateWithoutBookingInputSchema';

export const BookingItemCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingItemCreateOrConnectWithoutBookingInputSchema;
