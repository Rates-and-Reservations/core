import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MerchantAssetCountOrderByAggregateInputSchema } from './MerchantAssetCountOrderByAggregateInputSchema';
import { MerchantAssetMaxOrderByAggregateInputSchema } from './MerchantAssetMaxOrderByAggregateInputSchema';
import { MerchantAssetMinOrderByAggregateInputSchema } from './MerchantAssetMinOrderByAggregateInputSchema';

export const MerchantAssetOrderByWithAggregationInputSchema: z.ZodType<Prisma.MerchantAssetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MerchantAssetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MerchantAssetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MerchantAssetMinOrderByAggregateInputSchema).optional()
}).strict();

export default MerchantAssetOrderByWithAggregationInputSchema;
