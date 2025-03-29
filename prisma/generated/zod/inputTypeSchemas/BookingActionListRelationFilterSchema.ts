import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';

export const BookingActionListRelationFilterSchema: z.ZodType<Prisma.BookingActionListRelationFilter> = z.object({
  every: z.lazy(() => BookingActionWhereInputSchema).optional(),
  some: z.lazy(() => BookingActionWhereInputSchema).optional(),
  none: z.lazy(() => BookingActionWhereInputSchema).optional()
}).strict();

export default BookingActionListRelationFilterSchema;
