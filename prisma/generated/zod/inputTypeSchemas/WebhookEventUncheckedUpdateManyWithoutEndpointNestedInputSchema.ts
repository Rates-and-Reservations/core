import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateWithoutEndpointInputSchema } from './WebhookEventCreateWithoutEndpointInputSchema';
import { WebhookEventUncheckedCreateWithoutEndpointInputSchema } from './WebhookEventUncheckedCreateWithoutEndpointInputSchema';
import { WebhookEventCreateOrConnectWithoutEndpointInputSchema } from './WebhookEventCreateOrConnectWithoutEndpointInputSchema';
import { WebhookEventUpsertWithWhereUniqueWithoutEndpointInputSchema } from './WebhookEventUpsertWithWhereUniqueWithoutEndpointInputSchema';
import { WebhookEventCreateManyEndpointInputEnvelopeSchema } from './WebhookEventCreateManyEndpointInputEnvelopeSchema';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateWithWhereUniqueWithoutEndpointInputSchema } from './WebhookEventUpdateWithWhereUniqueWithoutEndpointInputSchema';
import { WebhookEventUpdateManyWithWhereWithoutEndpointInputSchema } from './WebhookEventUpdateManyWithWhereWithoutEndpointInputSchema';
import { WebhookEventScalarWhereInputSchema } from './WebhookEventScalarWhereInputSchema';

export const WebhookEventUncheckedUpdateManyWithoutEndpointNestedInputSchema: z.ZodType<Prisma.WebhookEventUncheckedUpdateManyWithoutEndpointNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutEndpointInputSchema),z.lazy(() => WebhookEventCreateWithoutEndpointInputSchema).array(),z.lazy(() => WebhookEventUncheckedCreateWithoutEndpointInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutEndpointInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEventCreateOrConnectWithoutEndpointInputSchema),z.lazy(() => WebhookEventCreateOrConnectWithoutEndpointInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WebhookEventUpsertWithWhereUniqueWithoutEndpointInputSchema),z.lazy(() => WebhookEventUpsertWithWhereUniqueWithoutEndpointInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEventCreateManyEndpointInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WebhookEventUpdateWithWhereUniqueWithoutEndpointInputSchema),z.lazy(() => WebhookEventUpdateWithWhereUniqueWithoutEndpointInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WebhookEventUpdateManyWithWhereWithoutEndpointInputSchema),z.lazy(() => WebhookEventUpdateManyWithWhereWithoutEndpointInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WebhookEventScalarWhereInputSchema),z.lazy(() => WebhookEventScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WebhookEventUncheckedUpdateManyWithoutEndpointNestedInputSchema;
