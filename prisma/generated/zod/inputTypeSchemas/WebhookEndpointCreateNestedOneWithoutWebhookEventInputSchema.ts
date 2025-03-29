import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointCreateWithoutWebhookEventInputSchema } from './WebhookEndpointCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema } from './WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';

export const WebhookEndpointCreateNestedOneWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEndpointCreateNestedOneWithoutWebhookEventInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema).optional(),
  connect: z.lazy(() => WebhookEndpointWhereUniqueInputSchema).optional()
}).strict();

export default WebhookEndpointCreateNestedOneWithoutWebhookEventInputSchema;
