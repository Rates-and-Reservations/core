import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema';

export const BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutBookingRequestFlowInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema;
