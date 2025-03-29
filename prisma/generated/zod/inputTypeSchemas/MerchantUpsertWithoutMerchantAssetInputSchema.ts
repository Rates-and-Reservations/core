import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutMerchantAssetInputSchema } from './MerchantUpdateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantAssetInputSchema } from './MerchantUncheckedUpdateWithoutMerchantAssetInputSchema';
import { MerchantCreateWithoutMerchantAssetInputSchema } from './MerchantCreateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedCreateWithoutMerchantAssetInputSchema } from './MerchantUncheckedCreateWithoutMerchantAssetInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutMerchantAssetInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutMerchantAssetInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantAssetInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantAssetInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutMerchantAssetInputSchema;
