import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';
import { BookingActionUpdateWithoutBookingRequestActionValueInputSchema } from './BookingActionUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema';

export const BookingActionUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingActionUpdateToOneWithWhereWithoutBookingRequestActionValueInput> = z.object({
  where: z.lazy(() => BookingActionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingActionUpdateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema) ]),
}).strict();

export default BookingActionUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema;
