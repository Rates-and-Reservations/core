import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereInputSchema } from './BookingRequestFlowWhereInputSchema';

export const BookingRequestFlowListRelationFilterSchema: z.ZodType<Prisma.BookingRequestFlowListRelationFilter> = z.object({
  every: z.lazy(() => BookingRequestFlowWhereInputSchema).optional(),
  some: z.lazy(() => BookingRequestFlowWhereInputSchema).optional(),
  none: z.lazy(() => BookingRequestFlowWhereInputSchema).optional()
}).strict();

export default BookingRequestFlowListRelationFilterSchema;
