import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { BookingRequestUpdateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema';

export const BookingRequestUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingRequestUpdateToOneWithWhereWithoutBookingRequestActionValueInput> = z.object({
  where: z.lazy(() => BookingRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema) ]),
}).strict();

export default BookingRequestUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema;
