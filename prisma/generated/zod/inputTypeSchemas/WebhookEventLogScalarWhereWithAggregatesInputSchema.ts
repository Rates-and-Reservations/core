import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const WebhookEventLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WebhookEventLogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookEventLogScalarWhereWithAggregatesInputSchema),z.lazy(() => WebhookEventLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookEventLogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookEventLogScalarWhereWithAggregatesInputSchema),z.lazy(() => WebhookEventLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  attemptNumber: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  responseCode: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  responseBody: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  errorMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  sentAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WebhookEventLogScalarWhereWithAggregatesInputSchema;
