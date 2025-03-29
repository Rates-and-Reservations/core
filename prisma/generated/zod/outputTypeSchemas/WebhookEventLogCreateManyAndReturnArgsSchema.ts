import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogCreateManyInputSchema } from '../inputTypeSchemas/WebhookEventLogCreateManyInputSchema'

export const WebhookEventLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WebhookEventLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ WebhookEventLogCreateManyInputSchema,WebhookEventLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WebhookEventLogCreateManyAndReturnArgsSchema;
