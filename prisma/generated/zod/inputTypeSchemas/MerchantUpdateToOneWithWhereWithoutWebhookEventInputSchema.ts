import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutWebhookEventInputSchema } from './MerchantUpdateWithoutWebhookEventInputSchema';
import { MerchantUncheckedUpdateWithoutWebhookEventInputSchema } from './MerchantUncheckedUpdateWithoutWebhookEventInputSchema';

export const MerchantUpdateToOneWithWhereWithoutWebhookEventInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWebhookEventInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutWebhookEventInputSchema;
