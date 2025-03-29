import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetScalarWhereInputSchema } from './MerchantAssetScalarWhereInputSchema';
import { MerchantAssetUpdateManyMutationInputSchema } from './MerchantAssetUpdateManyMutationInputSchema';
import { MerchantAssetUncheckedUpdateManyWithoutMerchantInputSchema } from './MerchantAssetUncheckedUpdateManyWithoutMerchantInputSchema';

export const MerchantAssetUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantAssetUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantAssetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MerchantAssetUpdateManyMutationInputSchema),z.lazy(() => MerchantAssetUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantAssetUpdateManyWithWhereWithoutMerchantInputSchema;
