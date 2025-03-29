import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutRefundRequestInputSchema } from './MerchantCreateWithoutRefundRequestInputSchema';
import { MerchantUncheckedCreateWithoutRefundRequestInputSchema } from './MerchantUncheckedCreateWithoutRefundRequestInputSchema';
import { MerchantCreateOrConnectWithoutRefundRequestInputSchema } from './MerchantCreateOrConnectWithoutRefundRequestInputSchema';
import { MerchantUpsertWithoutRefundRequestInputSchema } from './MerchantUpsertWithoutRefundRequestInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutRefundRequestInputSchema } from './MerchantUpdateToOneWithWhereWithoutRefundRequestInputSchema';
import { MerchantUpdateWithoutRefundRequestInputSchema } from './MerchantUpdateWithoutRefundRequestInputSchema';
import { MerchantUncheckedUpdateWithoutRefundRequestInputSchema } from './MerchantUncheckedUpdateWithoutRefundRequestInputSchema';

export const MerchantUpdateOneRequiredWithoutRefundRequestNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutRefundRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRefundRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutRefundRequestInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutRefundRequestInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutRefundRequestInputSchema),z.lazy(() => MerchantUpdateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutRefundRequestInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutRefundRequestNestedInputSchema;
