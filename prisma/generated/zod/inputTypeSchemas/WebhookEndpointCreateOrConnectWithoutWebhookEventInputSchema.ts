import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';
import { WebhookEndpointCreateWithoutWebhookEventInputSchema } from './WebhookEndpointCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema';

export const WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEndpointCreateOrConnectWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => WebhookEndpointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema) ]),
}).strict();

export default WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema;
