import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { NestedEnumWebhookEventTypeWithAggregatesFilterSchema } from './NestedEnumWebhookEventTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumWebhookEventTypeFilterSchema } from './NestedEnumWebhookEventTypeFilterSchema';

export const EnumWebhookEventTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumWebhookEventTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WebhookEventTypeSchema).optional(),
  in: z.lazy(() => WebhookEventTypeSchema).array().optional(),
  notIn: z.lazy(() => WebhookEventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookEventTypeSchema),z.lazy(() => NestedEnumWebhookEventTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWebhookEventTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWebhookEventTypeFilterSchema).optional()
}).strict();

export default EnumWebhookEventTypeWithAggregatesFilterSchema;
