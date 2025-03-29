import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { WebhookEndpointArgsSchema } from "../outputTypeSchemas/WebhookEndpointArgsSchema"
import { WebhookEventLogFindManyArgsSchema } from "../outputTypeSchemas/WebhookEventLogFindManyArgsSchema"
import { WebhookEventCountOutputTypeArgsSchema } from "../outputTypeSchemas/WebhookEventCountOutputTypeArgsSchema"

export const WebhookEventIncludeSchema: z.ZodType<Prisma.WebhookEventInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  endpoint: z.union([z.boolean(),z.lazy(() => WebhookEndpointArgsSchema)]).optional(),
  WebhookEventLog: z.union([z.boolean(),z.lazy(() => WebhookEventLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WebhookEventCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default WebhookEventIncludeSchema;
