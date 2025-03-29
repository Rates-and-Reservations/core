import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateWithoutEndpointInputSchema } from './WebhookEventUpdateWithoutEndpointInputSchema';
import { WebhookEventUncheckedUpdateWithoutEndpointInputSchema } from './WebhookEventUncheckedUpdateWithoutEndpointInputSchema';

export const WebhookEventUpdateWithWhereUniqueWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventUpdateWithWhereUniqueWithoutEndpointInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WebhookEventUpdateWithoutEndpointInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutEndpointInputSchema) ]),
}).strict();

export default WebhookEventUpdateWithWhereUniqueWithoutEndpointInputSchema;
