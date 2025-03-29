import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WebhookEndpointCountOrderByAggregateInputSchema } from './WebhookEndpointCountOrderByAggregateInputSchema';
import { WebhookEndpointMaxOrderByAggregateInputSchema } from './WebhookEndpointMaxOrderByAggregateInputSchema';
import { WebhookEndpointMinOrderByAggregateInputSchema } from './WebhookEndpointMinOrderByAggregateInputSchema';

export const WebhookEndpointOrderByWithAggregationInputSchema: z.ZodType<Prisma.WebhookEndpointOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  events: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WebhookEndpointCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WebhookEndpointMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WebhookEndpointMinOrderByAggregateInputSchema).optional()
}).strict();

export default WebhookEndpointOrderByWithAggregationInputSchema;
