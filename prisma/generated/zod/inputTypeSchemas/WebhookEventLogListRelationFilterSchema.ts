import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogWhereInputSchema } from './WebhookEventLogWhereInputSchema';

export const WebhookEventLogListRelationFilterSchema: z.ZodType<Prisma.WebhookEventLogListRelationFilter> = z.object({
  every: z.lazy(() => WebhookEventLogWhereInputSchema).optional(),
  some: z.lazy(() => WebhookEventLogWhereInputSchema).optional(),
  none: z.lazy(() => WebhookEventLogWhereInputSchema).optional()
}).strict();

export default WebhookEventLogListRelationFilterSchema;
