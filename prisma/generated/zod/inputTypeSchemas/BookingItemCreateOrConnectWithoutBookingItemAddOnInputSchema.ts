import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemCreateWithoutBookingItemAddOnInputSchema } from './BookingItemCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema';

export const BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.BookingItemCreateOrConnectWithoutBookingItemAddOnInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema) ]),
}).strict();

export default BookingItemCreateOrConnectWithoutBookingItemAddOnInputSchema;
