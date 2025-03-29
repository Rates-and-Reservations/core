import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';
import { WebhookEndpointCreateWithoutMerchantInputSchema } from './WebhookEndpointCreateWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedCreateWithoutMerchantInputSchema } from './WebhookEndpointUncheckedCreateWithoutMerchantInputSchema';

export const WebhookEndpointCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEndpointCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEndpointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEndpointCreateOrConnectWithoutMerchantInputSchema;
