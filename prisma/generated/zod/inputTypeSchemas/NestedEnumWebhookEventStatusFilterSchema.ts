import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';

export const NestedEnumWebhookEventStatusFilterSchema: z.ZodType<Prisma.NestedEnumWebhookEventStatusFilter> = z.object({
  equals: z.lazy(() => WebhookEventStatusSchema).optional(),
  in: z.lazy(() => WebhookEventStatusSchema).array().optional(),
  notIn: z.lazy(() => WebhookEventStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookEventStatusSchema),z.lazy(() => NestedEnumWebhookEventStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumWebhookEventStatusFilterSchema;
