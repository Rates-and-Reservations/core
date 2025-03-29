import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';

export const BookingActionScalarRelationFilterSchema: z.ZodType<Prisma.BookingActionScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingActionWhereInputSchema).optional(),
  isNot: z.lazy(() => BookingActionWhereInputSchema).optional()
}).strict();

export default BookingActionScalarRelationFilterSchema;
