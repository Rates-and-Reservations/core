import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WebhookEventLogCountOrderByAggregateInputSchema } from './WebhookEventLogCountOrderByAggregateInputSchema';
import { WebhookEventLogAvgOrderByAggregateInputSchema } from './WebhookEventLogAvgOrderByAggregateInputSchema';
import { WebhookEventLogMaxOrderByAggregateInputSchema } from './WebhookEventLogMaxOrderByAggregateInputSchema';
import { WebhookEventLogMinOrderByAggregateInputSchema } from './WebhookEventLogMinOrderByAggregateInputSchema';
import { WebhookEventLogSumOrderByAggregateInputSchema } from './WebhookEventLogSumOrderByAggregateInputSchema';

export const WebhookEventLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.WebhookEventLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  attemptNumber: z.lazy(() => SortOrderSchema).optional(),
  responseCode: z.lazy(() => SortOrderSchema).optional(),
  responseBody: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sentAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WebhookEventLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WebhookEventLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WebhookEventLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WebhookEventLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WebhookEventLogSumOrderByAggregateInputSchema).optional()
}).strict();

export default WebhookEventLogOrderByWithAggregationInputSchema;
