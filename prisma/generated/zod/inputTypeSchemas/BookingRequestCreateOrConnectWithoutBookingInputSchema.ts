import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutBookingInputSchema } from './BookingRequestCreateWithoutBookingInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingInputSchema } from './BookingRequestUncheckedCreateWithoutBookingInputSchema';

export const BookingRequestCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutBookingInputSchema;
