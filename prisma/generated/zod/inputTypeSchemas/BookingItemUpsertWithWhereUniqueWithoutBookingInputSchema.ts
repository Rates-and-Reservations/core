import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateWithoutBookingInputSchema } from './BookingItemUpdateWithoutBookingInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingInputSchema } from './BookingItemUncheckedUpdateWithoutBookingInputSchema';
import { BookingItemCreateWithoutBookingInputSchema } from './BookingItemCreateWithoutBookingInputSchema';
import { BookingItemUncheckedCreateWithoutBookingInputSchema } from './BookingItemUncheckedCreateWithoutBookingInputSchema';

export const BookingItemUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingItemUpdateWithoutBookingInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingItemUpsertWithWhereUniqueWithoutBookingInputSchema;
