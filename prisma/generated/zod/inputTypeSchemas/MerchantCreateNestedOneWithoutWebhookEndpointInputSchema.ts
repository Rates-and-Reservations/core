import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutWebhookEndpointInputSchema } from './MerchantCreateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedCreateWithoutWebhookEndpointInputSchema';
import { MerchantCreateOrConnectWithoutWebhookEndpointInputSchema } from './MerchantCreateOrConnectWithoutWebhookEndpointInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutWebhookEndpointInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutWebhookEndpointInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEndpointInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutWebhookEndpointInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutWebhookEndpointInputSchema;
