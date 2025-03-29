import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogUpdateWithoutBookingInputSchema } from './BookingActivityLogUpdateWithoutBookingInputSchema';
import { BookingActivityLogUncheckedUpdateWithoutBookingInputSchema } from './BookingActivityLogUncheckedUpdateWithoutBookingInputSchema';

export const BookingActivityLogUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.BookingActivityLogUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingActivityLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingActivityLogUpdateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default BookingActivityLogUpdateWithWhereUniqueWithoutBookingInputSchema;
