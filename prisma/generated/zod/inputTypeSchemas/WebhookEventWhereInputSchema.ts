import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumWebhookEventTypeFilterSchema } from './EnumWebhookEventTypeFilterSchema';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { EnumWebhookEventStatusFilterSchema } from './EnumWebhookEventStatusFilterSchema';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { WebhookEndpointScalarRelationFilterSchema } from './WebhookEndpointScalarRelationFilterSchema';
import { WebhookEndpointWhereInputSchema } from './WebhookEndpointWhereInputSchema';
import { WebhookEventLogListRelationFilterSchema } from './WebhookEventLogListRelationFilterSchema';

export const WebhookEventWhereInputSchema: z.ZodType<Prisma.WebhookEventWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookEventWhereInputSchema),z.lazy(() => WebhookEventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookEventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookEventWhereInputSchema),z.lazy(() => WebhookEventWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endpointId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventType: z.union([ z.lazy(() => EnumWebhookEventTypeFilterSchema),z.lazy(() => WebhookEventTypeSchema) ]).optional(),
  payload: z.lazy(() => JsonFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumWebhookEventStatusFilterSchema),z.lazy(() => WebhookEventStatusSchema) ]).optional(),
  responseCode: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  responseBody: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  retryCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  nextRetryAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  sentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  endpoint: z.union([ z.lazy(() => WebhookEndpointScalarRelationFilterSchema),z.lazy(() => WebhookEndpointWhereInputSchema) ]).optional(),
  WebhookEventLog: z.lazy(() => WebhookEventLogListRelationFilterSchema).optional()
}).strict();

export default WebhookEventWhereInputSchema;
