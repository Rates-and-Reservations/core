import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { BookingRequestUpdateWithoutBookingRequestFlowInputSchema } from './BookingRequestUpdateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema';

export const BookingRequestUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.BookingRequestUpdateToOneWithWhereWithoutBookingRequestFlowInput> = z.object({
  where: z.lazy(() => BookingRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]),
}).strict();

export default BookingRequestUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema;
