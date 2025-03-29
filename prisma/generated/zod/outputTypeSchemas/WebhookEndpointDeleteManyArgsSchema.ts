import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointWhereInputSchema } from '../inputTypeSchemas/WebhookEndpointWhereInputSchema'

export const WebhookEndpointDeleteManyArgsSchema: z.ZodType<Prisma.WebhookEndpointDeleteManyArgs> = z.object({
  where: WebhookEndpointWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WebhookEndpointDeleteManyArgsSchema;
