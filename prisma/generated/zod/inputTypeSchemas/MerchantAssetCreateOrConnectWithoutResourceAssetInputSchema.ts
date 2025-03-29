import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';
import { MerchantAssetCreateWithoutResourceAssetInputSchema } from './MerchantAssetCreateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema';

export const MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema: z.ZodType<Prisma.MerchantAssetCreateOrConnectWithoutResourceAssetInput> = z.object({
  where: z.lazy(() => MerchantAssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema) ]),
}).strict();

export default MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema;
