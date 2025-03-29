import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutBookingAddOnInputSchema } from './BookingCreateWithoutBookingAddOnInputSchema';
import { BookingUncheckedCreateWithoutBookingAddOnInputSchema } from './BookingUncheckedCreateWithoutBookingAddOnInputSchema';

export const BookingCreateOrConnectWithoutBookingAddOnInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutBookingAddOnInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingAddOnInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutBookingAddOnInputSchema;
