import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutWebhookEventInputSchema } from './MerchantCreateWithoutWebhookEventInputSchema';
import { MerchantUncheckedCreateWithoutWebhookEventInputSchema } from './MerchantUncheckedCreateWithoutWebhookEventInputSchema';
import { MerchantCreateOrConnectWithoutWebhookEventInputSchema } from './MerchantCreateOrConnectWithoutWebhookEventInputSchema';
import { MerchantUpsertWithoutWebhookEventInputSchema } from './MerchantUpsertWithoutWebhookEventInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutWebhookEventInputSchema } from './MerchantUpdateToOneWithWhereWithoutWebhookEventInputSchema';
import { MerchantUpdateWithoutWebhookEventInputSchema } from './MerchantUpdateWithoutWebhookEventInputSchema';
import { MerchantUncheckedUpdateWithoutWebhookEventInputSchema } from './MerchantUncheckedUpdateWithoutWebhookEventInputSchema';

export const MerchantUpdateOneRequiredWithoutWebhookEventNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutWebhookEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWebhookEventInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutWebhookEventInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutWebhookEventInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutWebhookEventInputSchema),z.lazy(() => MerchantUpdateWithoutWebhookEventInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWebhookEventInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutWebhookEventNestedInputSchema;
