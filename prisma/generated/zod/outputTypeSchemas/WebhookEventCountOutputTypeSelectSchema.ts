import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WebhookEventCountOutputTypeSelectSchema: z.ZodType<Prisma.WebhookEventCountOutputTypeSelect> = z.object({
  WebhookEventLog: z.boolean().optional(),
}).strict();

export default WebhookEventCountOutputTypeSelectSchema;
