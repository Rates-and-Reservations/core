import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueScalarWhereInputSchema } from './BookingRequestActionValueScalarWhereInputSchema';
import { BookingRequestActionValueUpdateManyMutationInputSchema } from './BookingRequestActionValueUpdateManyMutationInputSchema';
import { BookingRequestActionValueUncheckedUpdateManyWithoutBookingActionInputSchema } from './BookingRequestActionValueUncheckedUpdateManyWithoutBookingActionInputSchema';

export const BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestActionValueUpdateManyMutationInputSchema),z.lazy(() => BookingRequestActionValueUncheckedUpdateManyWithoutBookingActionInputSchema) ]),
}).strict();

export default BookingRequestActionValueUpdateManyWithWhereWithoutBookingActionInputSchema;
