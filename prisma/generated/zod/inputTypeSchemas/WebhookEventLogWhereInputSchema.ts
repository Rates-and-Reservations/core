import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WebhookEventScalarRelationFilterSchema } from './WebhookEventScalarRelationFilterSchema';
import { WebhookEventWhereInputSchema } from './WebhookEventWhereInputSchema';

export const WebhookEventLogWhereInputSchema: z.ZodType<Prisma.WebhookEventLogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookEventLogWhereInputSchema),z.lazy(() => WebhookEventLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookEventLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookEventLogWhereInputSchema),z.lazy(() => WebhookEventLogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attemptNumber: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  responseCode: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  responseBody: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sentAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  webhookEvent: z.union([ z.lazy(() => WebhookEventScalarRelationFilterSchema),z.lazy(() => WebhookEventWhereInputSchema) ]).optional(),
}).strict();

export default WebhookEventLogWhereInputSchema;
