import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { BookingRequestUpdateWithoutBookingInputSchema } from './BookingRequestUpdateWithoutBookingInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingInputSchema';

export const BookingRequestUpdateToOneWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.BookingRequestUpdateToOneWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default BookingRequestUpdateToOneWithWhereWithoutBookingInputSchema;
