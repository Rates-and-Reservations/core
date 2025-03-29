import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogCreateWithoutWebhookEventInputSchema } from './WebhookEventLogCreateWithoutWebhookEventInputSchema';
import { WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema } from './WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema';
import { WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema } from './WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema';
import { WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInputSchema } from './WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInputSchema';
import { WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema } from './WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema';
import { WebhookEventLogWhereUniqueInputSchema } from './WebhookEventLogWhereUniqueInputSchema';
import { WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInputSchema } from './WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInputSchema';
import { WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInputSchema } from './WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInputSchema';
import { WebhookEventLogScalarWhereInputSchema } from './WebhookEventLogScalarWhereInputSchema';

export const WebhookEventLogUpdateManyWithoutWebhookEventNestedInputSchema: z.ZodType<Prisma.WebhookEventLogUpdateManyWithoutWebhookEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventLogCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogCreateWithoutWebhookEventInputSchema).array(),z.lazy(() => WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUncheckedCreateWithoutWebhookEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogCreateOrConnectWithoutWebhookEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUpsertWithWhereUniqueWithoutWebhookEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WebhookEventLogWhereUniqueInputSchema),z.lazy(() => WebhookEventLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WebhookEventLogWhereUniqueInputSchema),z.lazy(() => WebhookEventLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WebhookEventLogWhereUniqueInputSchema),z.lazy(() => WebhookEventLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WebhookEventLogWhereUniqueInputSchema),z.lazy(() => WebhookEventLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUpdateWithWhereUniqueWithoutWebhookEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInputSchema),z.lazy(() => WebhookEventLogUpdateManyWithWhereWithoutWebhookEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WebhookEventLogScalarWhereInputSchema),z.lazy(() => WebhookEventLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WebhookEventLogUpdateManyWithoutWebhookEventNestedInputSchema;
