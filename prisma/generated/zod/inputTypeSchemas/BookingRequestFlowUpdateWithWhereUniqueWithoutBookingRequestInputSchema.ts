import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithoutBookingRequestInputSchema } from './BookingRequestFlowUpdateWithoutBookingRequestInputSchema';
import { BookingRequestFlowUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedUpdateWithoutBookingRequestInputSchema';

export const BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestFlowUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestFlowUpdateWithWhereUniqueWithoutBookingRequestInputSchema;
