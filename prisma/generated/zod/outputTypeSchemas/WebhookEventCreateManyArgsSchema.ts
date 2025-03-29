import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventCreateManyInputSchema } from '../inputTypeSchemas/WebhookEventCreateManyInputSchema'

export const WebhookEventCreateManyArgsSchema: z.ZodType<Prisma.WebhookEventCreateManyArgs> = z.object({
  data: z.union([ WebhookEventCreateManyInputSchema,WebhookEventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WebhookEventCreateManyArgsSchema;
