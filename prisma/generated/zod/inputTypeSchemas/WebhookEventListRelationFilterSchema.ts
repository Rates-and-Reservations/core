import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereInputSchema } from './WebhookEventWhereInputSchema';

export const WebhookEventListRelationFilterSchema: z.ZodType<Prisma.WebhookEventListRelationFilter> = z.object({
  every: z.lazy(() => WebhookEventWhereInputSchema).optional(),
  some: z.lazy(() => WebhookEventWhereInputSchema).optional(),
  none: z.lazy(() => WebhookEventWhereInputSchema).optional()
}).strict();

export default WebhookEventListRelationFilterSchema;
