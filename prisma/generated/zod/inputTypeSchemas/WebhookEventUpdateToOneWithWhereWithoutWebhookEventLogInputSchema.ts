import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereInputSchema } from './WebhookEventWhereInputSchema';
import { WebhookEventUpdateWithoutWebhookEventLogInputSchema } from './WebhookEventUpdateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema';

export const WebhookEventUpdateToOneWithWhereWithoutWebhookEventLogInputSchema: z.ZodType<Prisma.WebhookEventUpdateToOneWithWhereWithoutWebhookEventLogInput> = z.object({
  where: z.lazy(() => WebhookEventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WebhookEventUpdateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema) ]),
}).strict();

export default WebhookEventUpdateToOneWithWhereWithoutWebhookEventLogInputSchema;
