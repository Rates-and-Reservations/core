import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationRequestMinOrderByAggregateInputSchema: z.ZodType<Prisma.CancellationRequestMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  bookingItemId: z.lazy(() => SortOrderSchema).optional(),
  requestedBy: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  processedAt: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedAt: z.lazy(() => SortOrderSchema).optional(),
  declinedAt: z.lazy(() => SortOrderSchema).optional(),
  refundAmount: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationRequestMinOrderByAggregateInputSchema;
