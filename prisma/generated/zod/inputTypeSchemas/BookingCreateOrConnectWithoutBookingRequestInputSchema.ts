import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutBookingRequestInputSchema } from './BookingCreateWithoutBookingRequestInputSchema';
import { BookingUncheckedCreateWithoutBookingRequestInputSchema } from './BookingUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutBookingRequestInputSchema;
