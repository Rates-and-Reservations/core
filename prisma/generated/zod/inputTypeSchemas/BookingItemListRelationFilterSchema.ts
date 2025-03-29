import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';

export const BookingItemListRelationFilterSchema: z.ZodType<Prisma.BookingItemListRelationFilter> = z.object({
  every: z.lazy(() => BookingItemWhereInputSchema).optional(),
  some: z.lazy(() => BookingItemWhereInputSchema).optional(),
  none: z.lazy(() => BookingItemWhereInputSchema).optional()
}).strict();

export default BookingItemListRelationFilterSchema;
