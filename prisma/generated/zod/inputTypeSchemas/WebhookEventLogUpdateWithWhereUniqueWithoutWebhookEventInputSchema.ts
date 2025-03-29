import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogWhereUniqueInputSchema } from './WebhookEventLogWhereUniqueInputSchema';
import { WebhookEventLogUpdateWithoutWebhookEventInputSchema } from './WebhookEventLogUpdateWithoutWebhookEventInputSchema';
import { WebhookEventLogUncheckedUpdateWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedUpdateWithoutWebhookEventInputSchema';

export const WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => WebhookEventLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WebhookEventLogUpdateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUncheckedUpdateWithoutWebhookEventInputSchema) ]),
}).strict();

export default WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInputSchema;
