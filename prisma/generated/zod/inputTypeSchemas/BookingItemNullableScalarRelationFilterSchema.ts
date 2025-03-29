import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';

export const BookingItemNullableScalarRelationFilterSchema: z.ZodType<Prisma.BookingItemNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingItemWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BookingItemWhereInputSchema).optional().nullable()
}).strict();

export default BookingItemNullableScalarRelationFilterSchema;
