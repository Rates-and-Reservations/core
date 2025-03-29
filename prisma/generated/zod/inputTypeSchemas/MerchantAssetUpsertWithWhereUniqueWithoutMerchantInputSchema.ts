import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';
import { MerchantAssetUpdateWithoutMerchantInputSchema } from './MerchantAssetUpdateWithoutMerchantInputSchema';
import { MerchantAssetUncheckedUpdateWithoutMerchantInputSchema } from './MerchantAssetUncheckedUpdateWithoutMerchantInputSchema';
import { MerchantAssetCreateWithoutMerchantInputSchema } from './MerchantAssetCreateWithoutMerchantInputSchema';
import { MerchantAssetUncheckedCreateWithoutMerchantInputSchema } from './MerchantAssetUncheckedCreateWithoutMerchantInputSchema';

export const MerchantAssetUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantAssetUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantAssetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MerchantAssetUpdateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantAssetUpsertWithWhereUniqueWithoutMerchantInputSchema;
