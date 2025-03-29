import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/WebhookEventLogUpdateManyMutationInputSchema'
import { WebhookEventLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WebhookEventLogUncheckedUpdateManyInputSchema'
import { WebhookEventLogWhereInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereInputSchema'

export const WebhookEventLogUpdateManyArgsSchema: z.ZodType<Prisma.WebhookEventLogUpdateManyArgs> = z.object({
  data: z.union([ WebhookEventLogUpdateManyMutationInputSchema,WebhookEventLogUncheckedUpdateManyInputSchema ]),
  where: WebhookEventLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WebhookEventLogUpdateManyArgsSchema;
