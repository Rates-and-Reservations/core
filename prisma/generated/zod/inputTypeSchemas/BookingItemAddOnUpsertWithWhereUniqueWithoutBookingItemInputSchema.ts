import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnUpdateWithoutBookingItemInputSchema } from './BookingItemAddOnUpdateWithoutBookingItemInputSchema';
import { BookingItemAddOnUncheckedUpdateWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedUpdateWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateWithoutBookingItemInputSchema } from './BookingItemAddOnCreateWithoutBookingItemInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema';

export const BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingItemAddOnUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUncheckedUpdateWithoutBookingItemInputSchema) ]),
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutBookingItemInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingItemAddOnUpsertWithWhereUniqueWithoutBookingItemInputSchema;
