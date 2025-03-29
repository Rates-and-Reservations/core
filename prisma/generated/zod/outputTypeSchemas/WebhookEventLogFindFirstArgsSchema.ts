import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogIncludeSchema } from '../inputTypeSchemas/WebhookEventLogIncludeSchema'
import { WebhookEventLogWhereInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereInputSchema'
import { WebhookEventLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookEventLogOrderByWithRelationInputSchema'
import { WebhookEventLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereUniqueInputSchema'
import { WebhookEventLogScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookEventLogScalarFieldEnumSchema'
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

export const WebhookEventLogFindFirstArgsSchema: z.ZodType<Prisma.WebhookEventLogFindFirstArgs> = z.object({
  select: WebhookEventLogSelectSchema.optional(),
  include: z.lazy(() => WebhookEventLogIncludeSchema).optional(),
  where: WebhookEventLogWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEventLogOrderByWithRelationInputSchema.array(),WebhookEventLogOrderByWithRelationInputSchema ]).optional(),
  cursor: WebhookEventLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WebhookEventLogScalarFieldEnumSchema,WebhookEventLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WebhookEventLogFindFirstArgsSchema;
