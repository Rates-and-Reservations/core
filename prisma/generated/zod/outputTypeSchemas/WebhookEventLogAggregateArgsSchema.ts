import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogWhereInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereInputSchema'
import { WebhookEventLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookEventLogOrderByWithRelationInputSchema'
import { WebhookEventLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereUniqueInputSchema'

export const WebhookEventLogAggregateArgsSchema: z.ZodType<Prisma.WebhookEventLogAggregateArgs> = z.object({
  where: WebhookEventLogWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEventLogOrderByWithRelationInputSchema.array(),WebhookEventLogOrderByWithRelationInputSchema ]).optional(),
  cursor: WebhookEventLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookEventLogAggregateArgsSchema;
