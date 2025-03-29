import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointCreateWithoutWebhookEventInputSchema } from './WebhookEndpointCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema';
import { WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema } from './WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema';
import { WebhookEndpointUpsertWithoutWebhookEventInputSchema } from './WebhookEndpointUpsertWithoutWebhookEventInputSchema';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';
import { WebhookEndpointUpdateToOneWithWhereWithoutWebhookEventInputSchema } from './WebhookEndpointUpdateToOneWithWhereWithoutWebhookEventInputSchema';
import { WebhookEndpointUpdateWithoutWebhookEventInputSchema } from './WebhookEndpointUpdateWithoutWebhookEventInputSchema';
import { WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema } from './WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema';

export const WebhookEndpointUpdateOneRequiredWithoutWebhookEventNestedInputSchema: z.ZodType<Prisma.WebhookEndpointUpdateOneRequiredWithoutWebhookEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WebhookEndpointCreateOrConnectWithoutWebhookEventInputSchema).optional(),
  upsert: z.lazy(() => WebhookEndpointUpsertWithoutWebhookEventInputSchema).optional(),
  connect: z.lazy(() => WebhookEndpointWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WebhookEndpointUpdateToOneWithWhereWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUpdateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEndpointUncheckedUpdateWithoutWebhookEventInputSchema) ]).optional(),
}).strict();

export default WebhookEndpointUpdateOneRequiredWithoutWebhookEventNestedInputSchema;
