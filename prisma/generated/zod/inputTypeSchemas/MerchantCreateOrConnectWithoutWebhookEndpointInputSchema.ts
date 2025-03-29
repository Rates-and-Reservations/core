import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutWebhookEndpointInputSchema } from './MerchantCreateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedCreateWithoutWebhookEndpointInputSchema';

export const MerchantCreateOrConnectWithoutWebhookEndpointInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutWebhookEndpointInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEndpointInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutWebhookEndpointInputSchema;
