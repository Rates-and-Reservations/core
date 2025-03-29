import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestUpdateWithoutBookingInputSchema } from './BookingRequestUpdateWithoutBookingInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingInputSchema';
import { BookingRequestCreateWithoutBookingInputSchema } from './BookingRequestCreateWithoutBookingInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingInputSchema } from './BookingRequestUncheckedCreateWithoutBookingInputSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestUpsertWithoutBookingInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithoutBookingInput> = z.object({
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingInputSchema) ]),
  where: z.lazy(() => BookingRequestWhereInputSchema).optional()
}).strict();

export default BookingRequestUpsertWithoutBookingInputSchema;
