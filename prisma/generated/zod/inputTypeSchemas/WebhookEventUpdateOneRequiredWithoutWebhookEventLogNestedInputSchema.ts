import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateWithoutWebhookEventLogInputSchema } from './WebhookEventCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema } from './WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema';
import { WebhookEventUpsertWithoutWebhookEventLogInputSchema } from './WebhookEventUpsertWithoutWebhookEventLogInputSchema';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateToOneWithWhereWithoutWebhookEventLogInputSchema } from './WebhookEventUpdateToOneWithWhereWithoutWebhookEventLogInputSchema';
import { WebhookEventUpdateWithoutWebhookEventLogInputSchema } from './WebhookEventUpdateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema';

export const WebhookEventUpdateOneRequiredWithoutWebhookEventLogNestedInputSchema: z.ZodType<Prisma.WebhookEventUpdateOneRequiredWithoutWebhookEventLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema).optional(),
  upsert: z.lazy(() => WebhookEventUpsertWithoutWebhookEventLogInputSchema).optional(),
  connect: z.lazy(() => WebhookEventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WebhookEventUpdateToOneWithWhereWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUpdateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutWebhookEventLogInputSchema) ]).optional(),
}).strict();

export default WebhookEventUpdateOneRequiredWithoutWebhookEventLogNestedInputSchema;
