import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { NestedEnumWebhookEventTypeFilterSchema } from './NestedEnumWebhookEventTypeFilterSchema';

export const EnumWebhookEventTypeFilterSchema: z.ZodType<Prisma.EnumWebhookEventTypeFilter> = z.object({
  equals: z.lazy(() => WebhookEventTypeSchema).optional(),
  in: z.lazy(() => WebhookEventTypeSchema).array().optional(),
  notIn: z.lazy(() => WebhookEventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookEventTypeSchema),z.lazy(() => NestedEnumWebhookEventTypeFilterSchema) ]).optional(),
}).strict();

export default EnumWebhookEventTypeFilterSchema;
