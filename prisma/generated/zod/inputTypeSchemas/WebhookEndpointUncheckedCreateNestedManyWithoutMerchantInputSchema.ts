import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointCreateWithoutMerchantInputSchema } from './WebhookEndpointCreateWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedCreateWithoutMerchantInputSchema } from './WebhookEndpointUncheckedCreateWithoutMerchantInputSchema';
import { WebhookEndpointCreateOrConnectWithoutMerchantInputSchema } from './WebhookEndpointCreateOrConnectWithoutMerchantInputSchema';
import { WebhookEndpointCreateManyMerchantInputEnvelopeSchema } from './WebhookEndpointCreateManyMerchantInputEnvelopeSchema';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';

export const WebhookEndpointUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEndpointUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointCreateWithoutMerchantInputSchema).array(),z.lazy(() => WebhookEndpointUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEndpointCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEndpointCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WebhookEndpointWhereUniqueInputSchema),z.lazy(() => WebhookEndpointWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WebhookEndpointUncheckedCreateNestedManyWithoutMerchantInputSchema;
