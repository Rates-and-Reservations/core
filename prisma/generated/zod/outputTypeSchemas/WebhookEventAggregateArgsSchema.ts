import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventWhereInputSchema } from '../inputTypeSchemas/WebhookEventWhereInputSchema'
import { WebhookEventOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookEventOrderByWithRelationInputSchema'
import { WebhookEventWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEventWhereUniqueInputSchema'

export const WebhookEventAggregateArgsSchema: z.ZodType<Prisma.WebhookEventAggregateArgs> = z.object({
  where: WebhookEventWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEventOrderByWithRelationInputSchema.array(),WebhookEventOrderByWithRelationInputSchema ]).optional(),
  cursor: WebhookEventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookEventAggregateArgsSchema;
