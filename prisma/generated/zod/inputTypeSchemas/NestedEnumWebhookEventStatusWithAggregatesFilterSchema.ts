import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumWebhookEventStatusFilterSchema } from './NestedEnumWebhookEventStatusFilterSchema';

export const NestedEnumWebhookEventStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWebhookEventStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WebhookEventStatusSchema).optional(),
  in: z.lazy(() => WebhookEventStatusSchema).array().optional(),
  notIn: z.lazy(() => WebhookEventStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookEventStatusSchema),z.lazy(() => NestedEnumWebhookEventStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWebhookEventStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWebhookEventStatusFilterSchema).optional()
}).strict();

export default NestedEnumWebhookEventStatusWithAggregatesFilterSchema;
