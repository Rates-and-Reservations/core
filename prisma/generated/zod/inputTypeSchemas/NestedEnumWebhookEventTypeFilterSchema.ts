import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';

export const NestedEnumWebhookEventTypeFilterSchema: z.ZodType<Prisma.NestedEnumWebhookEventTypeFilter> = z.object({
  equals: z.lazy(() => WebhookEventTypeSchema).optional(),
  in: z.lazy(() => WebhookEventTypeSchema).array().optional(),
  notIn: z.lazy(() => WebhookEventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookEventTypeSchema),z.lazy(() => NestedEnumWebhookEventTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumWebhookEventTypeFilterSchema;
