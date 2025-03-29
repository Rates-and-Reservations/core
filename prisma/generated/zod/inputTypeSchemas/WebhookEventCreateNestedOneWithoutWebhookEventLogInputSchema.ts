import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateWithoutWebhookEventLogInputSchema } from './WebhookEventCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema } from './WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema';
import { WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema } from './WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';

export const WebhookEventCreateNestedOneWithoutWebhookEventLogInputSchema: z.ZodType<Prisma.WebhookEventCreateNestedOneWithoutWebhookEventLogInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutWebhookEventLogInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WebhookEventCreateOrConnectWithoutWebhookEventLogInputSchema).optional(),
  connect: z.lazy(() => WebhookEventWhereUniqueInputSchema).optional()
}).strict();

export default WebhookEventCreateNestedOneWithoutWebhookEventLogInputSchema;
