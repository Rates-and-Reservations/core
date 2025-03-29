import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionUpdateWithoutBookingRequestActionValueInputSchema } from './BookingActionUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingActionCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';

export const BookingActionUpsertWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingActionUpsertWithoutBookingRequestActionValueInput> = z.object({
  update: z.union([ z.lazy(() => BookingActionUpdateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema) ]),
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]),
  where: z.lazy(() => BookingActionWhereInputSchema).optional()
}).strict();

export default BookingActionUpsertWithoutBookingRequestActionValueInputSchema;
