import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumWebhookEventTypeWithAggregatesFilterSchema } from './EnumWebhookEventTypeWithAggregatesFilterSchema';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { EnumWebhookEventStatusWithAggregatesFilterSchema } from './EnumWebhookEventStatusWithAggregatesFilterSchema';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const WebhookEventScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WebhookEventScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookEventScalarWhereWithAggregatesInputSchema),z.lazy(() => WebhookEventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookEventScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookEventScalarWhereWithAggregatesInputSchema),z.lazy(() => WebhookEventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endpointId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  eventType: z.union([ z.lazy(() => EnumWebhookEventTypeWithAggregatesFilterSchema),z.lazy(() => WebhookEventTypeSchema) ]).optional(),
  payload: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumWebhookEventStatusWithAggregatesFilterSchema),z.lazy(() => WebhookEventStatusSchema) ]).optional(),
  responseCode: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  responseBody: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  errorMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  retryCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  nextRetryAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  sentAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WebhookEventScalarWhereWithAggregatesInputSchema;
