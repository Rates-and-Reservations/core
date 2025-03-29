import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookEventAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookEventAvgOrderByAggregateInput> = z.object({
  responseCode: z.lazy(() => SortOrderSchema).optional(),
  retryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookEventAvgOrderByAggregateInputSchema;
