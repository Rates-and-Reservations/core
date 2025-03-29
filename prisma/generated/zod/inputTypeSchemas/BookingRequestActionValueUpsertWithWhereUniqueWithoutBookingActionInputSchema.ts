import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueUpdateWithoutBookingActionInputSchema } from './BookingRequestActionValueUpdateWithoutBookingActionInputSchema';
import { BookingRequestActionValueUncheckedUpdateWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedUpdateWithoutBookingActionInputSchema';
import { BookingRequestActionValueCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateWithoutBookingActionInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema';

export const BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestActionValueUpdateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUncheckedUpdateWithoutBookingActionInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingActionInputSchema) ]),
}).strict();

export default BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingActionInputSchema;
