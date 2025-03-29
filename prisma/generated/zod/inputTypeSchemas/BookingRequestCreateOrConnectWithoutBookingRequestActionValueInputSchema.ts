import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema';

export const BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutBookingRequestActionValueInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema;
