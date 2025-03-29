import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventScalarWhereInputSchema } from './WebhookEventScalarWhereInputSchema';
import { WebhookEventUpdateManyMutationInputSchema } from './WebhookEventUpdateManyMutationInputSchema';
import { WebhookEventUncheckedUpdateManyWithoutEndpointInputSchema } from './WebhookEventUncheckedUpdateManyWithoutEndpointInputSchema';

export const WebhookEventUpdateManyWithWhereWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventUpdateManyWithWhereWithoutEndpointInput> = z.object({
  where: z.lazy(() => WebhookEventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WebhookEventUpdateManyMutationInputSchema),z.lazy(() => WebhookEventUncheckedUpdateManyWithoutEndpointInputSchema) ]),
}).strict();

export default WebhookEventUpdateManyWithWhereWithoutEndpointInputSchema;
