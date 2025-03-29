import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutBookingActivityLogInputSchema } from './BookingCreateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedCreateWithoutBookingActivityLogInputSchema } from './BookingUncheckedCreateWithoutBookingActivityLogInputSchema';

export const BookingCreateOrConnectWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutBookingActivityLogInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingActivityLogInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutBookingActivityLogInputSchema;
