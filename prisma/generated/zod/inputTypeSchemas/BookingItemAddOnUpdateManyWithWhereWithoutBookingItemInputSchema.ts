import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnScalarWhereInputSchema } from './BookingItemAddOnScalarWhereInputSchema';
import { BookingItemAddOnUpdateManyMutationInputSchema } from './BookingItemAddOnUpdateManyMutationInputSchema';
import { BookingItemAddOnUncheckedUpdateManyWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedUpdateManyWithoutBookingItemInputSchema';

export const BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingItemAddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingItemAddOnUpdateManyMutationInputSchema),z.lazy(() => BookingItemAddOnUncheckedUpdateManyWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingItemAddOnUpdateManyWithWhereWithoutBookingItemInputSchema;
