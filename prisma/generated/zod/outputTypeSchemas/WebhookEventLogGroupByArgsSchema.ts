import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogWhereInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereInputSchema'
import { WebhookEventLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WebhookEventLogOrderByWithAggregationInputSchema'
import { WebhookEventLogScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookEventLogScalarFieldEnumSchema'
import { WebhookEventLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WebhookEventLogScalarWhereWithAggregatesInputSchema'

export const WebhookEventLogGroupByArgsSchema: z.ZodType<Prisma.WebhookEventLogGroupByArgs> = z.object({
  where: WebhookEventLogWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEventLogOrderByWithAggregationInputSchema.array(),WebhookEventLogOrderByWithAggregationInputSchema ]).optional(),
  by: WebhookEventLogScalarFieldEnumSchema.array(),
  having: WebhookEventLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookEventLogGroupByArgsSchema;
