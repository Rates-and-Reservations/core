import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereInputSchema } from './WebhookEventWhereInputSchema';

export const WebhookEventScalarRelationFilterSchema: z.ZodType<Prisma.WebhookEventScalarRelationFilter> = z.object({
  is: z.lazy(() => WebhookEventWhereInputSchema).optional(),
  isNot: z.lazy(() => WebhookEventWhereInputSchema).optional()
}).strict();

export default WebhookEventScalarRelationFilterSchema;
