import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';
import { MerchantAssetUpdateWithoutMerchantInputSchema } from './MerchantAssetUpdateWithoutMerchantInputSchema';
import { MerchantAssetUncheckedUpdateWithoutMerchantInputSchema } from './MerchantAssetUncheckedUpdateWithoutMerchantInputSchema';

export const MerchantAssetUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantAssetUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantAssetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MerchantAssetUpdateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantAssetUpdateWithWhereUniqueWithoutMerchantInputSchema;
