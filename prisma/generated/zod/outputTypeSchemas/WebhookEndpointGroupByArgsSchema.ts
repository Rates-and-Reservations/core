import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointWhereInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereInputSchema'
import { WebhookEndpointOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WebhookEndpointOrderByWithAggregationInputSchema'
import { WebhookEndpointScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookEndpointScalarFieldEnumSchema'
import { WebhookEndpointScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WebhookEndpointScalarWhereWithAggregatesInputSchema'

export const WebhookEndpointGroupByArgsSchema: z.ZodType<Prisma.WebhookEndpointGroupByArgs> = z.object({
  where: WebhookEndpointWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEndpointOrderByWithAggregationInputSchema.array(),WebhookEndpointOrderByWithAggregationInputSchema ]).optional(),
  by: WebhookEndpointScalarFieldEnumSchema.array(),
  having: WebhookEndpointScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WebhookEndpointGroupByArgsSchema;
