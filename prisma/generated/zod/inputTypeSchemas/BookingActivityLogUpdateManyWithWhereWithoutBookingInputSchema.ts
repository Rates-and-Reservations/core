import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogScalarWhereInputSchema } from './BookingActivityLogScalarWhereInputSchema';
import { BookingActivityLogUpdateManyMutationInputSchema } from './BookingActivityLogUpdateManyMutationInputSchema';
import { BookingActivityLogUncheckedUpdateManyWithoutBookingInputSchema } from './BookingActivityLogUncheckedUpdateManyWithoutBookingInputSchema';

export const BookingActivityLogUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.BookingActivityLogUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingActivityLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingActivityLogUpdateManyMutationInputSchema),z.lazy(() => BookingActivityLogUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default BookingActivityLogUpdateManyWithWhereWithoutBookingInputSchema;
