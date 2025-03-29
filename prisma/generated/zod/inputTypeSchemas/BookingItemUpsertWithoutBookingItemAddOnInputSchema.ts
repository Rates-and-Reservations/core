import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemUpdateWithoutBookingItemAddOnInputSchema } from './BookingItemUpdateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema';
import { BookingItemCreateWithoutBookingItemAddOnInputSchema } from './BookingItemCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema } from './BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';

export const BookingItemUpsertWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.BookingItemUpsertWithoutBookingItemAddOnInput> = z.object({
  update: z.union([ z.lazy(() => BookingItemUpdateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingItemAddOnInputSchema) ]),
  where: z.lazy(() => BookingItemWhereInputSchema).optional()
}).strict();

export default BookingItemUpsertWithoutBookingItemAddOnInputSchema;
