import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookEventLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookEventLogSumOrderByAggregateInput> = z.object({
  attemptNumber: z.lazy(() => SortOrderSchema).optional(),
  responseCode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookEventLogSumOrderByAggregateInputSchema;
