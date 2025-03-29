import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetCreateWithoutResourceAssetInputSchema } from './MerchantAssetCreateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema';
import { MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema } from './MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema';
import { MerchantAssetUpsertWithoutResourceAssetInputSchema } from './MerchantAssetUpsertWithoutResourceAssetInputSchema';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';
import { MerchantAssetUpdateToOneWithWhereWithoutResourceAssetInputSchema } from './MerchantAssetUpdateToOneWithWhereWithoutResourceAssetInputSchema';
import { MerchantAssetUpdateWithoutResourceAssetInputSchema } from './MerchantAssetUpdateWithoutResourceAssetInputSchema';
import { MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema } from './MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema';

export const MerchantAssetUpdateOneRequiredWithoutResourceAssetNestedInputSchema: z.ZodType<Prisma.MerchantAssetUpdateOneRequiredWithoutResourceAssetNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutResourceAssetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantAssetCreateOrConnectWithoutResourceAssetInputSchema).optional(),
  upsert: z.lazy(() => MerchantAssetUpsertWithoutResourceAssetInputSchema).optional(),
  connect: z.lazy(() => MerchantAssetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantAssetUpdateToOneWithWhereWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUpdateWithoutResourceAssetInputSchema),z.lazy(() => MerchantAssetUncheckedUpdateWithoutResourceAssetInputSchema) ]).optional(),
}).strict();

export default MerchantAssetUpdateOneRequiredWithoutResourceAssetNestedInputSchema;
