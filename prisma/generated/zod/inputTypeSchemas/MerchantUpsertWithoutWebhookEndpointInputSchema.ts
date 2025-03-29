import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutWebhookEndpointInputSchema } from './MerchantUpdateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema';
import { MerchantCreateWithoutWebhookEndpointInputSchema } from './MerchantCreateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedCreateWithoutWebhookEndpointInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutWebhookEndpointInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutWebhookEndpointInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEndpointInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutWebhookEndpointInputSchema;
