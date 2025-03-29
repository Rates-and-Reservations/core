import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEventCountOutputTypeSelectSchema } from './WebhookEventCountOutputTypeSelectSchema';

export const WebhookEventCountOutputTypeArgsSchema: z.ZodType<Prisma.WebhookEventCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WebhookEventCountOutputTypeSelectSchema).nullish(),
}).strict();

export default WebhookEventCountOutputTypeSelectSchema;
