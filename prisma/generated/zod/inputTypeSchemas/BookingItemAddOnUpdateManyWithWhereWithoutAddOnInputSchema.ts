import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnScalarWhereInputSchema } from './BookingItemAddOnScalarWhereInputSchema';
import { BookingItemAddOnUpdateManyMutationInputSchema } from './BookingItemAddOnUpdateManyMutationInputSchema';
import { BookingItemAddOnUncheckedUpdateManyWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedUpdateManyWithoutAddOnInputSchema';

export const BookingItemAddOnUpdateManyWithWhereWithoutAddOnInputSchema: z.ZodType<Prisma.BookingItemAddOnUpdateManyWithWhereWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingItemAddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingItemAddOnUpdateManyMutationInputSchema),z.lazy(() => BookingItemAddOnUncheckedUpdateManyWithoutAddOnInputSchema) ]),
}).strict();

export default BookingItemAddOnUpdateManyWithWhereWithoutAddOnInputSchema;
