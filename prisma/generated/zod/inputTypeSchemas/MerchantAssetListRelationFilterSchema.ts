import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';

export const MerchantAssetListRelationFilterSchema: z.ZodType<Prisma.MerchantAssetListRelationFilter> = z.object({
  every: z.lazy(() => MerchantAssetWhereInputSchema).optional(),
  some: z.lazy(() => MerchantAssetWhereInputSchema).optional(),
  none: z.lazy(() => MerchantAssetWhereInputSchema).optional()
}).strict();

export default MerchantAssetListRelationFilterSchema;
