import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookEventOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WebhookEventOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookEventOrderByRelationAggregateInputSchema;
