import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { WebhookEndpointOrderByWithRelationInputSchema } from './WebhookEndpointOrderByWithRelationInputSchema';
import { WebhookEventLogOrderByRelationAggregateInputSchema } from './WebhookEventLogOrderByRelationAggregateInputSchema';

export const WebhookEventOrderByWithRelationInputSchema: z.ZodType<Prisma.WebhookEventOrderByWithRelationInput> = z.object({
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
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  endpoint: z.lazy(() => WebhookEndpointOrderByWithRelationInputSchema).optional(),
  WebhookEventLog: z.lazy(() => WebhookEventLogOrderByRelationAggregateInputSchema).optional()
}).strict();

export default WebhookEventOrderByWithRelationInputSchema;
