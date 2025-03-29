import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestUpdateWithoutBookingRequestFlowInputSchema } from './BookingRequestUpdateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema';
import { BookingRequestCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestUpsertWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithoutBookingRequestFlowInput> = z.object({
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema) ]),
  where: z.lazy(() => BookingRequestWhereInputSchema).optional()
}).strict();

export default BookingRequestUpsertWithoutBookingRequestFlowInputSchema;
