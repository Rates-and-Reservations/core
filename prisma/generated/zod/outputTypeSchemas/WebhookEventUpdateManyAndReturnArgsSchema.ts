import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventUpdateManyMutationInputSchema } from '../inputTypeSchemas/WebhookEventUpdateManyMutationInputSchema'
import { WebhookEventUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WebhookEventUncheckedUpdateManyInputSchema'
import { WebhookEventWhereInputSchema } from '../inputTypeSchemas/WebhookEventWhereInputSchema'

export const WebhookEventUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.WebhookEventUpdateManyAndReturnArgs> = z.object({
  data: z.union([ WebhookEventUpdateManyMutationInputSchema,WebhookEventUncheckedUpdateManyInputSchema ]),
  where: WebhookEventWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WebhookEventUpdateManyAndReturnArgsSchema;
