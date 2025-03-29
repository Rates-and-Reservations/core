import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { WebhookEventOrderByRelationAggregateInputSchema } from './WebhookEventOrderByRelationAggregateInputSchema';

export const WebhookEndpointOrderByWithRelationInputSchema: z.ZodType<Prisma.WebhookEndpointOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  events: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventOrderByRelationAggregateInputSchema).optional()
}).strict();

export default WebhookEndpointOrderByWithRelationInputSchema;
