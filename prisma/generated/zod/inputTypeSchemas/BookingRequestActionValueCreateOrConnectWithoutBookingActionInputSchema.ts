import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateWithoutBookingActionInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema';

export const BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateOrConnectWithoutBookingActionInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema) ]),
}).strict();

export default BookingRequestActionValueCreateOrConnectWithoutBookingActionInputSchema;
