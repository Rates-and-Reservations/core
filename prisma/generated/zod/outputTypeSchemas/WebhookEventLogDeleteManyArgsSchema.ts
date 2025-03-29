import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogWhereInputSchema } from '../inputTypeSchemas/WebhookEventLogWhereInputSchema'

export const WebhookEventLogDeleteManyArgsSchema: z.ZodType<Prisma.WebhookEventLogDeleteManyArgs> = z.object({
  where: WebhookEventLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WebhookEventLogDeleteManyArgsSchema;
