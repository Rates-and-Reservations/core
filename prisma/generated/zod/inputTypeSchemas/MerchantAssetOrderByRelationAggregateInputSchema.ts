import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MerchantAssetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MerchantAssetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MerchantAssetOrderByRelationAggregateInputSchema;
