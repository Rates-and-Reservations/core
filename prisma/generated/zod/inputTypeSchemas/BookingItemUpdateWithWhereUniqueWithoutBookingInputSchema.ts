import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateWithoutBookingInputSchema } from './BookingItemUpdateWithoutBookingInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingInputSchema } from './BookingItemUncheckedUpdateWithoutBookingInputSchema';

export const BookingItemUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingItemUpdateWithoutBookingInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default BookingItemUpdateWithWhereUniqueWithoutBookingInputSchema;
