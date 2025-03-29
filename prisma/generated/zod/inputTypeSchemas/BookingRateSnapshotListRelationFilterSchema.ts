import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereInputSchema } from './BookingRateSnapshotWhereInputSchema';

export const BookingRateSnapshotListRelationFilterSchema: z.ZodType<Prisma.BookingRateSnapshotListRelationFilter> = z.object({
  every: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional(),
  some: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional(),
  none: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional()
}).strict();

export default BookingRateSnapshotListRelationFilterSchema;
