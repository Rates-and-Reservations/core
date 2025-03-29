import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventIncludeSchema } from '../inputTypeSchemas/WebhookEventIncludeSchema'
import { WebhookEventWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEventWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { WebhookEndpointArgsSchema } from "../outputTypeSchemas/WebhookEndpointArgsSchema"
import { WebhookEventLogFindManyArgsSchema } from "../outputTypeSchemas/WebhookEventLogFindManyArgsSchema"
import { WebhookEventCountOutputTypeArgsSchema } from "../outputTypeSchemas/WebhookEventCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const WebhookEventFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WebhookEventFindUniqueOrThrowArgs> = z.object({
  select: WebhookEventSelectSchema.optional(),
  include: z.lazy(() => WebhookEventIncludeSchema).optional(),
  where: WebhookEventWhereUniqueInputSchema,
}).strict() ;

export default WebhookEventFindUniqueOrThrowArgsSchema;
