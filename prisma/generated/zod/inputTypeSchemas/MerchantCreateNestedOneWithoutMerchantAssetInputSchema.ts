import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutMerchantAssetInputSchema } from './MerchantCreateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedCreateWithoutMerchantAssetInputSchema } from './MerchantUncheckedCreateWithoutMerchantAssetInputSchema';
import { MerchantCreateOrConnectWithoutMerchantAssetInputSchema } from './MerchantCreateOrConnectWithoutMerchantAssetInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutMerchantAssetInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutMerchantAssetInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantAssetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutMerchantAssetInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutMerchantAssetInputSchema;
