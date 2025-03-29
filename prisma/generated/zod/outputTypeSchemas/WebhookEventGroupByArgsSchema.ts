import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventWhereInputSchema } from '../inputTypeSchemas/WebhookEventWhereInputSchema'
import { WebhookEventOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WebhookEventOrderByWithAggregationInputSchema'
import { WebhookEventScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookEventScalarFieldEnumSchema'
import { WebhookEventScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WebhookEventScalarWhereWithAggregatesInputSchema'

export const WebhookEventGroupByArgsSchema: z.ZodType<Prisma.WebhookEventGroupByArgs> = z.object({
  where: WebhookEventWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEventOrderByWithAggregationInputSchema.array(),WebhookEventOrderByWithAggregationInputSchema ]).optional(),
  by: WebhookEventScalarFieldEnumSchema.array(),
  having: WebhookEventScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookEventGroupByArgsSchema;
