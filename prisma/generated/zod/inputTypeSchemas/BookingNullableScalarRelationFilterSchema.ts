import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingNullableScalarRelationFilterSchema: z.ZodType<Prisma.BookingNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BookingWhereInputSchema).optional().nullable()
}).strict();

export default BookingNullableScalarRelationFilterSchema;
