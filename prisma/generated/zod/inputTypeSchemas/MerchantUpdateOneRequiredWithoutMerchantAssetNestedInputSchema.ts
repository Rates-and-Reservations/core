import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutMerchantAssetInputSchema } from './MerchantCreateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedCreateWithoutMerchantAssetInputSchema } from './MerchantUncheckedCreateWithoutMerchantAssetInputSchema';
import { MerchantCreateOrConnectWithoutMerchantAssetInputSchema } from './MerchantCreateOrConnectWithoutMerchantAssetInputSchema';
import { MerchantUpsertWithoutMerchantAssetInputSchema } from './MerchantUpsertWithoutMerchantAssetInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutMerchantAssetInputSchema } from './MerchantUpdateToOneWithWhereWithoutMerchantAssetInputSchema';
import { MerchantUpdateWithoutMerchantAssetInputSchema } from './MerchantUpdateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantAssetInputSchema } from './MerchantUncheckedUpdateWithoutMerchantAssetInputSchema';

export const MerchantUpdateOneRequiredWithoutMerchantAssetNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutMerchantAssetNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantAssetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutMerchantAssetInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutMerchantAssetInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUpdateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantAssetInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutMerchantAssetNestedInputSchema;
