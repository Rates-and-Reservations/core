import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookEventLogCountOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookEventLogCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  attemptNumber: z.lazy(() => SortOrderSchema).optional(),
  responseCode: z.lazy(() => SortOrderSchema).optional(),
  responseBody: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.lazy(() => SortOrderSchema).optional(),
  sentAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookEventLogCountOrderByAggregateInputSchema;
