import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventArgsSchema } from "../outputTypeSchemas/WebhookEventArgsSchema"

export const WebhookEventLogSelectSchema: z.ZodType<Prisma.WebhookEventLogSelect> = z.object({
  id: z.boolean().optional(),
  eventId: z.boolean().optional(),
  attemptNumber: z.boolean().optional(),
  responseCode: z.boolean().optional(),
  responseBody: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  sentAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  webhookEvent: z.union([z.boolean(),z.lazy(() => WebhookEventArgsSchema)]).optional(),
}).strict()

export default WebhookEventLogSelectSchema;
