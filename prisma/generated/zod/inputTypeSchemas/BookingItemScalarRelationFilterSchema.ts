import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';

export const BookingItemScalarRelationFilterSchema: z.ZodType<Prisma.BookingItemScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingItemWhereInputSchema).optional(),
  isNot: z.lazy(() => BookingItemWhereInputSchema).optional()
}).strict();

export default BookingItemScalarRelationFilterSchema;
