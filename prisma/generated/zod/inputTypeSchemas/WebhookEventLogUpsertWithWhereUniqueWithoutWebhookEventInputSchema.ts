import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogWhereUniqueInputSchema } from './WebhookEventLogWhereUniqueInputSchema';
import { WebhookEventLogUpdateWithoutWebhookEventInputSchema } from './WebhookEventLogUpdateWithoutWebhookEventInputSchema';
import { WebhookEventLogUncheckedUpdateWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedUpdateWithoutWebhookEventInputSchema';
import { WebhookEventLogCreateWithoutWebhookEventInputSchema } from './WebhookEventLogCreateWithoutWebhookEventInputSchema';
import { WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema';

export const WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => WebhookEventLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WebhookEventLogUpdateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUncheckedUpdateWithoutWebhookEventInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookEventLogCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema) ]),
}).strict();

export default WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInputSchema;
