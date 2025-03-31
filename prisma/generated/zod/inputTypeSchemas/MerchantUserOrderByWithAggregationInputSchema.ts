import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MerchantUserCountOrderByAggregateInputSchema } from './MerchantUserCountOrderByAggregateInputSchema';
import { MerchantUserMaxOrderByAggregateInputSchema } from './MerchantUserMaxOrderByAggregateInputSchema';
import { MerchantUserMinOrderByAggregateInputSchema } from './MerchantUserMinOrderByAggregateInputSchema';

export const MerchantUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.MerchantUserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MerchantUserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MerchantUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MerchantUserMinOrderByAggregateInputSchema).optional()
}).strict();

export default MerchantUserOrderByWithAggregationInputSchema;
