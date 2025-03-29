import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutWebhookEventInputSchema } from './MerchantCreateWithoutWebhookEventInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEventInputSchema } from './MerchantUncheckedCreateWithoutWebhookEventInputSchema';

export const MerchantCreateOrConnectWithoutWebhookEventInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutWebhookEventInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEventInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutWebhookEventInputSchema;
