import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateWithoutBookingRequestInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestFlowCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestFlowCreateOrConnectWithoutBookingRequestInputSchema;
