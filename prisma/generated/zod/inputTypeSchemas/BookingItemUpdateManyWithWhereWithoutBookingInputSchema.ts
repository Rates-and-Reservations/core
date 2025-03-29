import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemScalarWhereInputSchema } from './BookingItemScalarWhereInputSchema';
import { BookingItemUpdateManyMutationInputSchema } from './BookingItemUpdateManyMutationInputSchema';
import { BookingItemUncheckedUpdateManyWithoutBookingInputSchema } from './BookingItemUncheckedUpdateManyWithoutBookingInputSchema';

export const BookingItemUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingItemUpdateManyMutationInputSchema),z.lazy(() => BookingItemUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default BookingItemUpdateManyWithWhereWithoutBookingInputSchema;
