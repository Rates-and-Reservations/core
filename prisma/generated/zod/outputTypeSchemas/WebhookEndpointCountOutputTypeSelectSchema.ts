import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WebhookEndpointCountOutputTypeSelectSchema: z.ZodType<Prisma.WebhookEndpointCountOutputTypeSelect> = z.object({
  WebhookEvent: z.boolean().optional(),
}).strict();

export default WebhookEndpointCountOutputTypeSelectSchema;
