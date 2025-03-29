import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogIncludeSchema } from '../inputTypeSchemas/WebhookEventLogIncludeSchema'
import { WebhookEventLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereUniqueInputSchema'
import { WebhookEventArgsSchema } from "../outputTypeSchemas/WebhookEventArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const WebhookEventLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WebhookEventLogFindUniqueOrThrowArgs> = z.object({
  select: WebhookEventLogSelectSchema.optional(),
  include: z.lazy(() => WebhookEventLogIncludeSchema).optional(),
  where: WebhookEventLogWhereUniqueInputSchema,
}).strict() ;

export default WebhookEventLogFindUniqueOrThrowArgsSchema;
