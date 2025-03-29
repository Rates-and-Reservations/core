import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereInputSchema } from './BookingRateSnapshotWhereInputSchema';

export const BookingRateSnapshotScalarRelationFilterSchema: z.ZodType<Prisma.BookingRateSnapshotScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional(),
  isNot: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional()
}).strict();

export default BookingRateSnapshotScalarRelationFilterSchema;
