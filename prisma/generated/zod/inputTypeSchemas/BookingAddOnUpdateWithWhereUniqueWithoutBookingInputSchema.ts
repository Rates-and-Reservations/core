import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnUpdateWithoutBookingInputSchema } from './BookingAddOnUpdateWithoutBookingInputSchema';
import { BookingAddOnUncheckedUpdateWithoutBookingInputSchema } from './BookingAddOnUncheckedUpdateWithoutBookingInputSchema';

export const BookingAddOnUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.BookingAddOnUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingAddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingAddOnUpdateWithoutBookingInputSchema),z.lazy(() => BookingAddOnUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default BookingAddOnUpdateWithWhereUniqueWithoutBookingInputSchema;
