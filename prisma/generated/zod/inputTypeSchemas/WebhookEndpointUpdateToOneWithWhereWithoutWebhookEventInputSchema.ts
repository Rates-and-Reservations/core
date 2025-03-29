import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereInputSchema } from './WebhookEndpointWhereInputSchema';
import { WebhookEndpointUpdateWithoutWebhookEventInputSchema } from './WebhookEndpointUpdateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema';

export const WebhookEndpointUpdateToOneWithWhereWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEndpointUpdateToOneWithWhereWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => WebhookEndpointWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WebhookEndpointUpdateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema) ]),
}).strict();

export default WebhookEndpointUpdateToOneWithWhereWithoutWebhookEventInputSchema;
