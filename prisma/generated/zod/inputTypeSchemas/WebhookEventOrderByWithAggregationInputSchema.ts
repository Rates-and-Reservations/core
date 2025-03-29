import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WebhookEventCountOrderByAggregateInputSchema } from './WebhookEventCountOrderByAggregateInputSchema';
import { WebhookEventAvgOrderByAggregateInputSchema } from './WebhookEventAvgOrderByAggregateInputSchema';
import { WebhookEventMaxOrderByAggregateInputSchema } from './WebhookEventMaxOrderByAggregateInputSchema';
import { WebhookEventMinOrderByAggregateInputSchema } from './WebhookEventMinOrderByAggregateInputSchema';
import { WebhookEventSumOrderByAggregateInputSchema } from './WebhookEventSumOrderByAggregateInputSchema';

export const WebhookEventOrderByWithAggregationInputSchema: z.ZodType<Prisma.WebhookEventOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  endpointId: z.lazy(() => SortOrderSchema).optional(),
  eventType: z.lazy(() => SortOrderSchema).optional(),
  payload: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  responseCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  responseBody: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  retryCount: z.lazy(() => SortOrderSchema).optional(),
  nextRetryAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sentAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WebhookEventCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WebhookEventAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WebhookEventMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WebhookEventMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WebhookEventSumOrderByAggregateInputSchema).optional()
}).strict();

export default WebhookEventOrderByWithAggregationInputSchema;
