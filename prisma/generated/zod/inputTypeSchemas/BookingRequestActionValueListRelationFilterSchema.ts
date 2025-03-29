import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereInputSchema } from './BookingRequestActionValueWhereInputSchema';

export const BookingRequestActionValueListRelationFilterSchema: z.ZodType<Prisma.BookingRequestActionValueListRelationFilter> = z.object({
  every: z.lazy(() => BookingRequestActionValueWhereInputSchema).optional(),
  some: z.lazy(() => BookingRequestActionValueWhereInputSchema).optional(),
  none: z.lazy(() => BookingRequestActionValueWhereInputSchema).optional()
}).strict();

export default BookingRequestActionValueListRelationFilterSchema;
