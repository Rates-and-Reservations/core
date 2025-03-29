import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventArgsSchema } from "../outputTypeSchemas/WebhookEventArgsSchema"

export const WebhookEventLogIncludeSchema: z.ZodType<Prisma.WebhookEventLogInclude> = z.object({
  webhookEvent: z.union([z.boolean(),z.lazy(() => WebhookEventArgsSchema)]).optional(),
}).strict()

export default WebhookEventLogIncludeSchema;
