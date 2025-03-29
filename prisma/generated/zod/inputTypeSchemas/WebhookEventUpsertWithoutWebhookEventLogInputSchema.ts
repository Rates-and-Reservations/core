import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventUpdateWithoutWebhookEventLogInputSchema } from './WebhookEventUpdateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema';
import { WebhookEventCreateWithoutWebhookEventLogInputSchema } from './WebhookEventCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventWhereInputSchema } from './WebhookEventWhereInputSchema';

export const WebhookEventUpsertWithoutWebhookEventLogInputSchema: z.ZodType<Prisma.WebhookEventUpsertWithoutWebhookEventLogInput> = z.object({
  update: z.union([ z.lazy(() => WebhookEventUpdateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema) ]),
  where: z.lazy(() => WebhookEventWhereInputSchema).optional()
}).strict();

export default WebhookEventUpsertWithoutWebhookEventLogInputSchema;
