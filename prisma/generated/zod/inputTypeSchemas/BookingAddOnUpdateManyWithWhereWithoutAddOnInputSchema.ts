import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnScalarWhereInputSchema } from './BookingAddOnScalarWhereInputSchema';
import { BookingAddOnUpdateManyMutationInputSchema } from './BookingAddOnUpdateManyMutationInputSchema';
import { BookingAddOnUncheckedUpdateManyWithoutAddOnInputSchema } from './BookingAddOnUncheckedUpdateManyWithoutAddOnInputSchema';

export const BookingAddOnUpdateManyWithWhereWithoutAddOnInputSchema: z.ZodType<Prisma.BookingAddOnUpdateManyWithWhereWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingAddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingAddOnUpdateManyMutationInputSchema),z.lazy(() => BookingAddOnUncheckedUpdateManyWithoutAddOnInputSchema) ]),
}).strict();

export default BookingAddOnUpdateManyWithWhereWithoutAddOnInputSchema;
