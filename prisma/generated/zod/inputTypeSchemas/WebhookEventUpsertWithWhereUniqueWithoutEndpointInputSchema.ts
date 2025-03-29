import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateWithoutEndpointInputSchema } from './WebhookEventUpdateWithoutEndpointInputSchema';
import { WebhookEventUncheckedUpdateWithoutEndpointInputSchema } from './WebhookEventUncheckedUpdateWithoutEndpointInputSchema';
import { WebhookEventCreateWithoutEndpointInputSchema } from './WebhookEventCreateWithoutEndpointInputSchema';
import { WebhookEventUncheckedCreateWithoutEndpointInputSchema } from './WebhookEventUncheckedCreateWithoutEndpointInputSchema';

export const WebhookEventUpsertWithWhereUniqueWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventUpsertWithWhereUniqueWithoutEndpointInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WebhookEventUpdateWithoutEndpointInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutEndpointInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutEndpointInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutEndpointInputSchema) ]),
}).strict();

export default WebhookEventUpsertWithWhereUniqueWithoutEndpointInputSchema;
