import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutBookingItemInputSchema } from './BookingUpdateWithoutBookingItemInputSchema';
import { BookingUncheckedUpdateWithoutBookingItemInputSchema } from './BookingUncheckedUpdateWithoutBookingItemInputSchema';
import { BookingCreateWithoutBookingItemInputSchema } from './BookingCreateWithoutBookingItemInputSchema';
import { BookingUncheckedCreateWithoutBookingItemInputSchema } from './BookingUncheckedCreateWithoutBookingItemInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingUpsertWithoutBookingItemInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingItemInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingItemInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutBookingItemInputSchema;
