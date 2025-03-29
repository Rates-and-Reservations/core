import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointWhereInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereInputSchema'
import { WebhookEndpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookEndpointOrderByWithRelationInputSchema'
import { WebhookEndpointWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereUniqueInputSchema'

export const WebhookEndpointAggregateArgsSchema: z.ZodType<Prisma.WebhookEndpointAggregateArgs> = z.object({
  where: WebhookEndpointWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEndpointOrderByWithRelationInputSchema.array(),WebhookEndpointOrderByWithRelationInputSchema ]).optional(),
  cursor: WebhookEndpointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookEndpointAggregateArgsSchema;
