import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookEventLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookEventLogAvgOrderByAggregateInput> = z.object({
  attemptNumber: z.lazy(() => SortOrderSchema).optional(),
  responseCode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookEventLogAvgOrderByAggregateInputSchema;
