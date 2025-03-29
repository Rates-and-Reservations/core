import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestScalarRelationFilterSchema: z.ZodType<Prisma.BookingRequestScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingRequestWhereInputSchema).optional(),
  isNot: z.lazy(() => BookingRequestWhereInputSchema).optional()
}).strict();

export default BookingRequestScalarRelationFilterSchema;
