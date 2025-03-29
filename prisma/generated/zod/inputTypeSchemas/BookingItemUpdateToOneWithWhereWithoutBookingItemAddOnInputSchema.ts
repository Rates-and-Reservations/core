import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';
import { BookingItemUpdateWithoutBookingItemAddOnInputSchema } from './BookingItemUpdateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema';

export const BookingItemUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.BookingItemUpdateToOneWithWhereWithoutBookingItemAddOnInput> = z.object({
  where: z.lazy(() => BookingItemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingItemUpdateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema) ]),
}).strict();

export default BookingItemUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema;
