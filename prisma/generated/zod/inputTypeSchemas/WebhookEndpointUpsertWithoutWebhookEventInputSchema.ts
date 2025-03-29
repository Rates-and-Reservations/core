import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointUpdateWithoutWebhookEventInputSchema } from './WebhookEndpointUpdateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema';
import { WebhookEndpointCreateWithoutWebhookEventInputSchema } from './WebhookEndpointCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointWhereInputSchema } from './WebhookEndpointWhereInputSchema';

export const WebhookEndpointUpsertWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEndpointUpsertWithoutWebhookEventInput> = z.object({
  update: z.union([ z.lazy(() => WebhookEndpointUpdateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema) ]),
  where: z.lazy(() => WebhookEndpointWhereInputSchema).optional()
}).strict();

export default WebhookEndpointUpsertWithoutWebhookEventInputSchema;
