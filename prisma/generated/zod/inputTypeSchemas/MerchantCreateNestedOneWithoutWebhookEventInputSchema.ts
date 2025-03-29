import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutWebhookEventInputSchema } from './MerchantCreateWithoutWebhookEventInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEventInputSchema } from './MerchantUncheckedCreateWithoutWebhookEventInputSchema';
import { MerchantCreateOrConnectWithoutWebhookEventInputSchema } from './MerchantCreateOrConnectWithoutWebhookEventInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutWebhookEventInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutWebhookEventInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEventInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutWebhookEventInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutWebhookEventInputSchema;
