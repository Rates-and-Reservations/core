import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutWebhookEndpointInputSchema } from './MerchantCreateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedCreateWithoutWebhookEndpointInputSchema';
import { MerchantCreateOrConnectWithoutWebhookEndpointInputSchema } from './MerchantCreateOrConnectWithoutWebhookEndpointInputSchema';
import { MerchantUpsertWithoutWebhookEndpointInputSchema } from './MerchantUpsertWithoutWebhookEndpointInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutWebhookEndpointInputSchema } from './MerchantUpdateToOneWithWhereWithoutWebhookEndpointInputSchema';
import { MerchantUpdateWithoutWebhookEndpointInputSchema } from './MerchantUpdateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema';

export const MerchantUpdateOneRequiredWithoutWebhookEndpointNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutWebhookEndpointNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEndpointInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutWebhookEndpointInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutWebhookEndpointInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUpdateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutWebhookEndpointNestedInputSchema;
