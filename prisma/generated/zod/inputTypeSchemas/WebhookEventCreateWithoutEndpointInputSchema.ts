import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';
import { MerchantCreateNestedOneWithoutWebhookEventInputSchema } from './MerchantCreateNestedOneWithoutWebhookEventInputSchema';
import { WebhookEventLogCreateNestedManyWithoutWebhookEventInputSchema } from './WebhookEventLogCreateNestedManyWithoutWebhookEventInputSchema';

export const WebhookEventCreateWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventCreateWithoutEndpointInput> = z.object({
  id: z.string().cuid().optional(),
  eventType: z.lazy(() => WebhookEventTypeSchema),
  payload: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  status: z.lazy(() => WebhookEventStatusSchema).optional(),
  responseCode: z.number().int().optional().nullable(),
  responseBody: z.string().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
  retryCount: z.number().int().optional(),
  nextRetryAt: z.coerce.date().optional().nullable(),
  sentAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutWebhookEventInputSchema),
  WebhookEventLog: z.lazy(() => WebhookEventLogCreateNestedManyWithoutWebhookEventInputSchema).optional()
}).strict();

export default WebhookEventCreateWithoutEndpointInputSchema;
