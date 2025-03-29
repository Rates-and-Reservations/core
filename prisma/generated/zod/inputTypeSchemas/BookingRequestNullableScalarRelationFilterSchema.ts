import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestNullableScalarRelationFilterSchema: z.ZodType<Prisma.BookingRequestNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingRequestWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BookingRequestWhereInputSchema).optional().nullable()
}).strict();

export default BookingRequestNullableScalarRelationFilterSchema;
