import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WebhookEventOrderByWithRelationInputSchema } from './WebhookEventOrderByWithRelationInputSchema';

export const WebhookEventLogOrderByWithRelationInputSchema: z.ZodType<Prisma.WebhookEventLogOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  attemptNumber: z.lazy(() => SortOrderSchema).optional(),
  responseCode: z.lazy(() => SortOrderSchema).optional(),
  responseBody: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sentAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  webhookEvent: z.lazy(() => WebhookEventOrderByWithRelationInputSchema).optional()
}).strict();

export default WebhookEventLogOrderByWithRelationInputSchema;
