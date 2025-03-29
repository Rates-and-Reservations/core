import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutWebhookEndpointInputSchema } from './MerchantUpdateWithoutWebhookEndpointInputSchema';
import { MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema } from './MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema';

export const MerchantUpdateToOneWithWhereWithoutWebhookEndpointInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutWebhookEndpointInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutWebhookEndpointInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWebhookEndpointInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutWebhookEndpointInputSchema;
