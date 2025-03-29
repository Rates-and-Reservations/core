import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestListRelationFilterSchema: z.ZodType<Prisma.BookingRequestListRelationFilter> = z.object({
  every: z.lazy(() => BookingRequestWhereInputSchema).optional(),
  some: z.lazy(() => BookingRequestWhereInputSchema).optional(),
  none: z.lazy(() => BookingRequestWhereInputSchema).optional()
}).strict();

export default BookingRequestListRelationFilterSchema;
