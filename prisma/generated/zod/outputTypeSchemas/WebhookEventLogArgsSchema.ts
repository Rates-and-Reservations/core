import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventLogSelectSchema } from '../inputTypeSchemas/WebhookEventLogSelectSchema';
import { WebhookEventLogIncludeSchema } from '../inputTypeSchemas/WebhookEventLogIncludeSchema';

export const WebhookEventLogArgsSchema: z.ZodType<Prisma.WebhookEventLogDefaultArgs> = z.object({
  select: z.lazy(() => WebhookEventLogSelectSchema).optional(),
  include: z.lazy(() => WebhookEventLogIncludeSchema).optional(),
}).strict();

export default WebhookEventLogArgsSchema;
