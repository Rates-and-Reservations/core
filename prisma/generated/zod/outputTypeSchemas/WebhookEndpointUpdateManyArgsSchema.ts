import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointUpdateManyMutationInputSchema } from '../inputTypeSchemas/WebhookEndpointUpdateManyMutationInputSchema'
import { WebhookEndpointUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WebhookEndpointUncheckedUpdateManyInputSchema'
import { WebhookEndpointWhereInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereInputSchema'

export const WebhookEndpointUpdateManyArgsSchema: z.ZodType<Prisma.WebhookEndpointUpdateManyArgs> = z.object({
  data: z.union([ WebhookEndpointUpdateManyMutationInputSchema,WebhookEndpointUncheckedUpdateManyInputSchema ]),
  where: WebhookEndpointWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WebhookEndpointUpdateManyArgsSchema;
