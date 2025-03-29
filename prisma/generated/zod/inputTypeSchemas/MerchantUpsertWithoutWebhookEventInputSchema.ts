import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutWebhookEventInputSchema } from './MerchantUpdateWithoutWebhookEventInputSchema';
import { MerchantUncheckedUpdateWithoutWebhookEventInputSchema } from './MerchantUncheckedUpdateWithoutWebhookEventInputSchema';
import { MerchantCreateWithoutWebhookEventInputSchema } from './MerchantCreateWithoutWebhookEventInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEventInputSchema } from './MerchantUncheckedCreateWithoutWebhookEventInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutWebhookEventInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutWebhookEventInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWebhookEventInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEventInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutWebhookEventInputSchema;
