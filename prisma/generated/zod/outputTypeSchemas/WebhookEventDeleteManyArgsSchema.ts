import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventWhereInputSchema } from '../inputTypeSchemas/WebhookEventWhereInputSchema'

export const WebhookEventDeleteManyArgsSchema: z.ZodType<Prisma.WebhookEventDeleteManyArgs> = z.object({
  where: WebhookEventWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WebhookEventDeleteManyArgsSchema;
