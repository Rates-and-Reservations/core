import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnScalarWhereInputSchema } from './BookingAddOnScalarWhereInputSchema';
import { BookingAddOnUpdateManyMutationInputSchema } from './BookingAddOnUpdateManyMutationInputSchema';
import { BookingAddOnUncheckedUpdateManyWithoutBookingInputSchema } from './BookingAddOnUncheckedUpdateManyWithoutBookingInputSchema';

export const BookingAddOnUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.BookingAddOnUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingAddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingAddOnUpdateManyMutationInputSchema),z.lazy(() => BookingAddOnUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default BookingAddOnUpdateManyWithWhereWithoutBookingInputSchema;
