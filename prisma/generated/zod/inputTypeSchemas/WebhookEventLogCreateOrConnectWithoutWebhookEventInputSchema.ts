import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogWhereUniqueInputSchema } from './WebhookEventLogWhereUniqueInputSchema';
import { WebhookEventLogCreateWithoutWebhookEventInputSchema } from './WebhookEventLogCreateWithoutWebhookEventInputSchema';
import { WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema';

export const WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEventLogCreateOrConnectWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => WebhookEventLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookEventLogCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema) ]),
}).strict();

export default WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema;
