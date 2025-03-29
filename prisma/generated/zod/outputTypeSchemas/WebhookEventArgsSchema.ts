import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventSelectSchema } from '../inputTypeSchemas/WebhookEventSelectSchema';
import { WebhookEventIncludeSchema } from '../inputTypeSchemas/WebhookEventIncludeSchema';

export const WebhookEventArgsSchema: z.ZodType<Prisma.WebhookEventDefaultArgs> = z.object({
  select: z.lazy(() => WebhookEventSelectSchema).optional(),
  include: z.lazy(() => WebhookEventIncludeSchema).optional(),
}).strict();

export default WebhookEventArgsSchema;
