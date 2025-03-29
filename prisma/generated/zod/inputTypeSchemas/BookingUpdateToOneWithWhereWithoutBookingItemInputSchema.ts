import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutBookingItemInputSchema } from './BookingUpdateWithoutBookingItemInputSchema';
import { BookingUncheckedUpdateWithoutBookingItemInputSchema } from './BookingUncheckedUpdateWithoutBookingItemInputSchema';

export const BookingUpdateToOneWithWhereWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutBookingItemInputSchema;
