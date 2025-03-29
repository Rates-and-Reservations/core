import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';
import { NestedEnumWebhookEventStatusFilterSchema } from './NestedEnumWebhookEventStatusFilterSchema';

export const EnumWebhookEventStatusFilterSchema: z.ZodType<Prisma.EnumWebhookEventStatusFilter> = z.object({
  equals: z.lazy(() => WebhookEventStatusSchema).optional(),
  in: z.lazy(() => WebhookEventStatusSchema).array().optional(),
  notIn: z.lazy(() => WebhookEventStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookEventStatusSchema),z.lazy(() => NestedEnumWebhookEventStatusFilterSchema) ]).optional(),
}).strict();

export default EnumWebhookEventStatusFilterSchema;
