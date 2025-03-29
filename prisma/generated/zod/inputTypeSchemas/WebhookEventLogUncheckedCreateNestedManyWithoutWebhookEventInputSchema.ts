import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogCreateWithoutWebhookEventInputSchema } from './WebhookEventLogCreateWithoutWebhookEventInputSchema';
import { WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema';
import { WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema } from './WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema';
import { WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema } from './WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema';
import { WebhookEventLogWhereUniqueInputSchema } from './WebhookEventLogWhereUniqueInputSchema';

export const WebhookEventLogUncheckedCreateNestedManyWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEventLogUncheckedCreateNestedManyWithoutWebhookEventInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventLogCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogCreateWithoutWebhookEventInputSchema).array(),z.lazy(() => WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WebhookEventLogWhereUniqueInputSchema),z.lazy(() => WebhookEventLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WebhookEventLogUncheckedCreateNestedManyWithoutWebhookEventInputSchema;
