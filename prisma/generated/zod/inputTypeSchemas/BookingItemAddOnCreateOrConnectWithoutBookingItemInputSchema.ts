import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnCreateWithoutBookingItemInputSchema } from './BookingItemAddOnCreateWithoutBookingItemInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema';

export const BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingItemAddOnCreateOrConnectWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingItemAddOnCreateOrConnectWithoutBookingItemInputSchema;
