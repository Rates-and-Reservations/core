import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventCreateWithoutWebhookEventLogInputSchema } from './WebhookEventCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema';

export const WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema: z.ZodType<Prisma.WebhookEventCreateOrConnectWithoutWebhookEventLogInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema) ]),
}).strict();

export default WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema;
