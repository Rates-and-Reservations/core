import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointIncludeSchema } from '../inputTypeSchemas/WebhookEndpointIncludeSchema'
import { WebhookEndpointWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereUniqueInputSchema'
import { WebhookEndpointCreateInputSchema } from '../inputTypeSchemas/WebhookEndpointCreateInputSchema'
import { WebhookEndpointUncheckedCreateInputSchema } from '../inputTypeSchemas/WebhookEndpointUncheckedCreateInputSchema'
import { WebhookEndpointUpdateInputSchema } from '../inputTypeSchemas/WebhookEndpointUpdateInputSchema'
import { WebhookEndpointUncheckedUpdateInputSchema } from '../inputTypeSchemas/WebhookEndpointUncheckedUpdateInputSchema'
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

export const WebhookEndpointUpsertArgsSchema: z.ZodType<Prisma.WebhookEndpointUpsertArgs> = z.object({
  select: WebhookEndpointSelectSchema.optional(),
  include: z.lazy(() => WebhookEndpointIncludeSchema).optional(),
  where: WebhookEndpointWhereUniqueInputSchema,
  create: z.union([ WebhookEndpointCreateInputSchema,WebhookEndpointUncheckedCreateInputSchema ]),
  update: z.union([ WebhookEndpointUpdateInputSchema,WebhookEndpointUncheckedUpdateInputSchema ]),
}).strict() ;

export default WebhookEndpointUpsertArgsSchema;
