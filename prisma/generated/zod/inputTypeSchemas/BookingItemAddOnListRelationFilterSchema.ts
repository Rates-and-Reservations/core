import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereInputSchema } from './BookingItemAddOnWhereInputSchema';

export const BookingItemAddOnListRelationFilterSchema: z.ZodType<Prisma.BookingItemAddOnListRelationFilter> = z.object({
  every: z.lazy(() => BookingItemAddOnWhereInputSchema).optional(),
  some: z.lazy(() => BookingItemAddOnWhereInputSchema).optional(),
  none: z.lazy(() => BookingItemAddOnWhereInputSchema).optional()
}).strict();

export default BookingItemAddOnListRelationFilterSchema;
