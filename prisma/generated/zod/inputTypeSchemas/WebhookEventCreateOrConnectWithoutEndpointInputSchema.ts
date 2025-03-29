import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventCreateWithoutEndpointInputSchema } from './WebhookEventCreateWithoutEndpointInputSchema';
import { WebhookEventUncheckedCreateWithoutEndpointInputSchema } from './WebhookEventUncheckedCreateWithoutEndpointInputSchema';

export const WebhookEventCreateOrConnectWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventCreateOrConnectWithoutEndpointInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutEndpointInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutEndpointInputSchema) ]),
}).strict();

export default WebhookEventCreateOrConnectWithoutEndpointInputSchema;
