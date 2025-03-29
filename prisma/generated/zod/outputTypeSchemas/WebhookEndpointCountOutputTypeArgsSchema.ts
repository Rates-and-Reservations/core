import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointCountOutputTypeSelectSchema } from './WebhookEndpointCountOutputTypeSelectSchema';

export const WebhookEndpointCountOutputTypeArgsSchema: z.ZodType<Prisma.WebhookEndpointCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WebhookEndpointCountOutputTypeSelectSchema).nullish(),
}).strict();

export default WebhookEndpointCountOutputTypeSelectSchema;
