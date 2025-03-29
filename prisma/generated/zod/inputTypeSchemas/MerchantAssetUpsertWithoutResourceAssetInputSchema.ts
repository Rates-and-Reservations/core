import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetUpdateWithoutResourceAssetInputSchema } from './MerchantAssetUpdateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema';
import { MerchantAssetCreateWithoutResourceAssetInputSchema } from './MerchantAssetCreateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';

export const MerchantAssetUpsertWithoutResourceAssetInputSchema: z.ZodType<Prisma.MerchantAssetUpsertWithoutResourceAssetInput> = z.object({
  update: z.union([ z.lazy(() => MerchantAssetUpdateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema) ]),
  where: z.lazy(() => MerchantAssetWhereInputSchema).optional()
}).strict();

export default MerchantAssetUpsertWithoutResourceAssetInputSchema;
