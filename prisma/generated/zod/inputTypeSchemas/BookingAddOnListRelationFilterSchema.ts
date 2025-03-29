import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereInputSchema } from './BookingAddOnWhereInputSchema';

export const BookingAddOnListRelationFilterSchema: z.ZodType<Prisma.BookingAddOnListRelationFilter> = z.object({
  every: z.lazy(() => BookingAddOnWhereInputSchema).optional(),
  some: z.lazy(() => BookingAddOnWhereInputSchema).optional(),
  none: z.lazy(() => BookingAddOnWhereInputSchema).optional()
}).strict();

export default BookingAddOnListRelationFilterSchema;
