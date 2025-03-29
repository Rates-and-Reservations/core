import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookEndpointOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WebhookEndpointOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookEndpointOrderByRelationAggregateInputSchema;
