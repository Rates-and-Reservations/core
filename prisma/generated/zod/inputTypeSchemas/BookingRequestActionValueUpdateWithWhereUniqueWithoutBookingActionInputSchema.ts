import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueUpdateWithoutBookingActionInputSchema } from './BookingRequestActionValueUpdateWithoutBookingActionInputSchema';
import { BookingRequestActionValueUncheckedUpdateWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedUpdateWithoutBookingActionInputSchema';

export const BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestActionValueUpdateWithoutBookingActionInputSchema),z.lazy(() => BookingRequestActionValueUncheckedUpdateWithoutBookingActionInputSchema) ]),
}).strict();

export default BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingActionInputSchema;
