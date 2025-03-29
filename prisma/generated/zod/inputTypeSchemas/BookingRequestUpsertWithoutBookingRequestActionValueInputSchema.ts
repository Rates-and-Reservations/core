import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestUpdateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestUpsertWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithoutBookingRequestActionValueInput> = z.object({
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]),
  where: z.lazy(() => BookingRequestWhereInputSchema).optional()
}).strict();

export default BookingRequestUpsertWithoutBookingRequestActionValueInputSchema;
