import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointIncludeSchema } from '../inputTypeSchemas/WebhookEndpointIncludeSchema'
import { WebhookEndpointWhereInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereInputSchema'
import { WebhookEndpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookEndpointOrderByWithRelationInputSchema'
import { WebhookEndpointWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereUniqueInputSchema'
import { WebhookEndpointScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookEndpointScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { WebhookEventFindManyArgsSchema } from "../outputTypeSchemas/WebhookEventFindManyArgsSchema"
import { WebhookEndpointCountOutputTypeArgsSchema } from "../outputTypeSchemas/WebhookEndpointCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebhookEndpointSelectSchema: z.ZodType<Prisma.WebhookEndpointSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  url: z.boolean().optional(),
  secret: z.boolean().optional(),
  events: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  WebhookEvent: z.union([z.boolean(),z.lazy(() => WebhookEventFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WebhookEndpointCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WebhookEndpointFindFirstArgsSchema: z.ZodType<Prisma.WebhookEndpointFindFirstArgs> = z.object({
  select: WebhookEndpointSelectSchema.optional(),
  include: z.lazy(() => WebhookEndpointIncludeSchema).optional(),
  where: WebhookEndpointWhereInputSchema.optional(),
  orderBy: z.union([ WebhookEndpointOrderByWithRelationInputSchema.array(),WebhookEndpointOrderByWithRelationInputSchema ]).optional(),
  cursor: WebhookEndpointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WebhookEndpointScalarFieldEnumSchema,WebhookEndpointScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WebhookEndpointFindFirstArgsSchema;
