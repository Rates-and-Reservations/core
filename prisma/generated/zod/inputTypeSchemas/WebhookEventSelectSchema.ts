import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { WebhookEndpointArgsSchema } from "../outputTypeSchemas/WebhookEndpointArgsSchema"
import { WebhookEventLogFindManyArgsSchema } from "../outputTypeSchemas/WebhookEventLogFindManyArgsSchema"
import { WebhookEventCountOutputTypeArgsSchema } from "../outputTypeSchemas/WebhookEventCountOutputTypeArgsSchema"

export const WebhookEventSelectSchema: z.ZodType<Prisma.WebhookEventSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  endpointId: z.boolean().optional(),
  eventType: z.boolean().optional(),
  payload: z.boolean().optional(),
  status: z.boolean().optional(),
  responseCode: z.boolean().optional(),
  responseBody: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  retryCount: z.boolean().optional(),
  nextRetryAt: z.boolean().optional(),
  sentAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  endpoint: z.union([z.boolean(),z.lazy(() => WebhookEndpointArgsSchema)]).optional(),
  WebhookEventLog: z.union([z.boolean(),z.lazy(() => WebhookEventLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WebhookEventCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default WebhookEventSelectSchema;
