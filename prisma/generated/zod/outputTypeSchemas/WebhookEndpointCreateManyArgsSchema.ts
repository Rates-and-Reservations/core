import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointCreateManyInputSchema } from '../inputTypeSchemas/WebhookEndpointCreateManyInputSchema'

export const WebhookEndpointCreateManyArgsSchema: z.ZodType<Prisma.WebhookEndpointCreateManyArgs> = z.object({
  data: z.union([ WebhookEndpointCreateManyInputSchema,WebhookEndpointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WebhookEndpointCreateManyArgsSchema;
