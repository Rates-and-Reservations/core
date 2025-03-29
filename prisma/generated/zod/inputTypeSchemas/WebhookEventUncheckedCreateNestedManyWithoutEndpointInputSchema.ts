import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateWithoutEndpointInputSchema } from './WebhookEventCreateWithoutEndpointInputSchema';
import { WebhookEventUncheckedCreateWithoutEndpointInputSchema } from './WebhookEventUncheckedCreateWithoutEndpointInputSchema';
import { WebhookEventCreateOrConnectWithoutEndpointInputSchema } from './WebhookEventCreateOrConnectWithoutEndpointInputSchema';
import { WebhookEventCreateManyEndpointInputEnvelopeSchema } from './WebhookEventCreateManyEndpointInputEnvelopeSchema';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';

export const WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventUncheckedCreateNestedManyWithoutEndpointInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutEndpointInputSchema),z.lazy(() => WebhookEventCreateWithoutEndpointInputSchema).array(),z.lazy(() => WebhookEventUncheckedCreateWithoutEndpointInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutEndpointInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEventCreateOrConnectWithoutEndpointInputSchema),z.lazy(() => WebhookEventCreateOrConnectWithoutEndpointInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEventCreateManyEndpointInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema;
