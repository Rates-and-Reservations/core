import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MerchantContactCountOrderByAggregateInputSchema } from './MerchantContactCountOrderByAggregateInputSchema';
import { MerchantContactMaxOrderByAggregateInputSchema } from './MerchantContactMaxOrderByAggregateInputSchema';
import { MerchantContactMinOrderByAggregateInputSchema } from './MerchantContactMinOrderByAggregateInputSchema';

export const MerchantContactOrderByWithAggregationInputSchema: z.ZodType<Prisma.MerchantContactOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MerchantContactCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MerchantContactMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MerchantContactMinOrderByAggregateInputSchema).optional()
}).strict();

export default MerchantContactOrderByWithAggregationInputSchema;
