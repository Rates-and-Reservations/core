import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutMerchantAssetInputSchema } from './MerchantUpdateWithoutMerchantAssetInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantAssetInputSchema } from './MerchantUncheckedUpdateWithoutMerchantAssetInputSchema';

export const MerchantUpdateToOneWithWhereWithoutMerchantAssetInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutMerchantAssetInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutMerchantAssetInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantAssetInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutMerchantAssetInputSchema;
