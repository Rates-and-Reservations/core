import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogCreateWithoutBookingInputSchema } from './BookingActivityLogCreateWithoutBookingInputSchema';
import { BookingActivityLogUncheckedCreateWithoutBookingInputSchema } from './BookingActivityLogUncheckedCreateWithoutBookingInputSchema';

export const BookingActivityLogCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.BookingActivityLogCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingActivityLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingActivityLogCreateOrConnectWithoutBookingInputSchema;
