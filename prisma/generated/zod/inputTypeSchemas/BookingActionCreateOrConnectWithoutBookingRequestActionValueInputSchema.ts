import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';
import { BookingActionCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema';

export const BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingActionCreateOrConnectWithoutBookingRequestActionValueInput> = z.object({
  where: z.lazy(() => BookingActionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]),
}).strict();

export default BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema;
