import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';
import { MerchantAssetUpdateWithoutResourceAssetInputSchema } from './MerchantAssetUpdateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema';

export const MerchantAssetUpdateToOneWithWhereWithoutResourceAssetInputSchema: z.ZodType<Prisma.MerchantAssetUpdateToOneWithWhereWithoutResourceAssetInput> = z.object({
  where: z.lazy(() => MerchantAssetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantAssetUpdateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema) ]),
}).strict();

export default MerchantAssetUpdateToOneWithWhereWithoutResourceAssetInputSchema;
