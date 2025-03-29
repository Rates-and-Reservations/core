import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';

export const MerchantAssetScalarRelationFilterSchema: z.ZodType<Prisma.MerchantAssetScalarRelationFilter> = z.object({
  is: z.lazy(() => MerchantAssetWhereInputSchema).optional(),
  isNot: z.lazy(() => MerchantAssetWhereInputSchema).optional()
}).strict();

export default MerchantAssetScalarRelationFilterSchema;
