import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutMerchantAssetInputSchema } from './MerchantCreateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedCreateWithoutMerchantAssetInputSchema } from './MerchantUncheckedCreateWithoutMerchantAssetInputSchema';

export const MerchantCreateOrConnectWithoutMerchantAssetInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutMerchantAssetInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantAssetInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutMerchantAssetInputSchema;
