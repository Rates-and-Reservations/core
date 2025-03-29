import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingRequestFlowCountOrderByAggregateInputSchema } from './BookingRequestFlowCountOrderByAggregateInputSchema';
import { BookingRequestFlowAvgOrderByAggregateInputSchema } from './BookingRequestFlowAvgOrderByAggregateInputSchema';
import { BookingRequestFlowMaxOrderByAggregateInputSchema } from './BookingRequestFlowMaxOrderByAggregateInputSchema';
import { BookingRequestFlowMinOrderByAggregateInputSchema } from './BookingRequestFlowMinOrderByAggregateInputSchema';
import { BookingRequestFlowSumOrderByAggregateInputSchema } from './BookingRequestFlowSumOrderByAggregateInputSchema';

export const BookingRequestFlowOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingRequestFlowOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingRequestId: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  uiTemplateId: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  usageLimit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usageCount: z.lazy(() => SortOrderSchema).optional(),
  webhookUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  webhookEvents: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingRequestFlowCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookingRequestFlowAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingRequestFlowMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingRequestFlowMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookingRequestFlowSumOrderByAggregateInputSchema).optional()
}).strict();

export default BookingRequestFlowOrderByWithAggregationInputSchema;
