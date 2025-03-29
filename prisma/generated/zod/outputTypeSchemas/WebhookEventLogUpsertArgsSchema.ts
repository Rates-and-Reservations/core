import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogIncludeSchema } from '../inputTypeSchemas/WebhookEventLogIncludeSchema'
import { WebhookEventLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereUniqueInputSchema'
import { WebhookEventLogCreateInputSchema } from '../inputTypeSchemas/WebhookEventLogCreateInputSchema'
import { WebhookEventLogUncheckedCreateInputSchema } from '../inputTypeSchemas/WebhookEventLogUncheckedCreateInputSchema'
import { WebhookEventLogUpdateInputSchema } from '../inputTypeSchemas/WebhookEventLogUpdateInputSchema'
import { WebhookEventLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/WebhookEventLogUncheckedUpdateInputSchema'
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

export const WebhookEventLogUpsertArgsSchema: z.ZodType<Prisma.WebhookEventLogUpsertArgs> = z.object({
  select: WebhookEventLogSelectSchema.optional(),
  include: z.lazy(() => WebhookEventLogIncludeSchema).optional(),
  where: WebhookEventLogWhereUniqueInputSchema,
  create: z.union([ WebhookEventLogCreateInputSchema,WebhookEventLogUncheckedCreateInputSchema ]),
  update: z.union([ WebhookEventLogUpdateInputSchema,WebhookEventLogUncheckedUpdateInputSchema ]),
}).strict() ;

export default WebhookEventLogUpsertArgsSchema;
