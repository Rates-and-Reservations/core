import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';
import { MerchantAssetCreateWithoutMerchantInputSchema } from './MerchantAssetCreateWithoutMerchantInputSchema';
import { MerchantAssetUncheckedCreateWithoutMerchantInputSchema } from './MerchantAssetUncheckedCreateWithoutMerchantInputSchema';

export const MerchantAssetCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantAssetCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantAssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantAssetCreateOrConnectWithoutMerchantInputSchema;
