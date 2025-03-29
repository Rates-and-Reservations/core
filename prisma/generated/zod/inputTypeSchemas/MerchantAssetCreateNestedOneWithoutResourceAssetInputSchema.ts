import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetCreateWithoutResourceAssetInputSchema } from './MerchantAssetCreateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema';
import { MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema } from './MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';

export const MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema: z.ZodType<Prisma.MerchantAssetCreateNestedOneWithoutResourceAssetInput> = z.object({
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema).optional(),
  connect: z.lazy(() => MerchantAssetWhereUniqueInputSchema).optional()
}).strict();

export default MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema;
