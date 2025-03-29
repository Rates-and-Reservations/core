import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnUpdateWithoutBookingItemInputSchema } from './BookingItemAddOnUpdateWithoutBookingItemInputSchema';
import { BookingItemAddOnUncheckedUpdateWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedUpdateWithoutBookingItemInputSchema';

export const BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingItemAddOnUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUncheckedUpdateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingItemAddOnUpdateWithWhereUniqueWithoutBookingItemInputSchema;
