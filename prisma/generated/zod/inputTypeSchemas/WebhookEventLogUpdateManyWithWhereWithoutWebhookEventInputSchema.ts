import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogScalarWhereInputSchema } from './WebhookEventLogScalarWhereInputSchema';
import { WebhookEventLogUpdateManyMutationInputSchema } from './WebhookEventLogUpdateManyMutationInputSchema';
import { WebhookEventLogUncheckedUpdateManyWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedUpdateManyWithoutWebhookEventInputSchema';

export const WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => WebhookEventLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WebhookEventLogUpdateManyMutationInputSchema),z.lazy(() => WebhookEventLogUncheckedUpdateManyWithoutWebhookEventInputSchema) ]),
}).strict();

export default WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInputSchema;
