import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantCountOrderByAggregateInputSchema } from './MerchantCountOrderByAggregateInputSchema';
import { MerchantMaxOrderByAggregateInputSchema } from './MerchantMaxOrderByAggregateInputSchema';
import { MerchantMinOrderByAggregateInputSchema } from './MerchantMinOrderByAggregateInputSchema';

export const MerchantOrderByWithAggregationInputSchema: z.ZodType<Prisma.MerchantOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  tradingName: z.lazy(() => SortOrderSchema).optional(),
  vatNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MerchantCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MerchantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MerchantMinOrderByAggregateInputSchema).optional()
}).strict();

export default MerchantOrderByWithAggregationInputSchema;
