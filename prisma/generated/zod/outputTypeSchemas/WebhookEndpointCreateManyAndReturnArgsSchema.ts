import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointCreateManyInputSchema } from '../inputTypeSchemas/WebhookEndpointCreateManyInputSchema'

export const WebhookEndpointCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WebhookEndpointCreateManyAndReturnArgs> = z.object({
  data: z.union([ WebhookEndpointCreateManyInputSchema,WebhookEndpointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WebhookEndpointCreateManyAndReturnArgsSchema;
