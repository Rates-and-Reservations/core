import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereInputSchema } from './BookingActivityLogWhereInputSchema';

export const BookingActivityLogListRelationFilterSchema: z.ZodType<Prisma.BookingActivityLogListRelationFilter> = z.object({
  every: z.lazy(() => BookingActivityLogWhereInputSchema).optional(),
  some: z.lazy(() => BookingActivityLogWhereInputSchema).optional(),
  none: z.lazy(() => BookingActivityLogWhereInputSchema).optional()
}).strict();

export default BookingActivityLogListRelationFilterSchema;
