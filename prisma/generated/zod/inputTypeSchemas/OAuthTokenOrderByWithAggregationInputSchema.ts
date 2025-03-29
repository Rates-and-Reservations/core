import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OAuthTokenCountOrderByAggregateInputSchema } from './OAuthTokenCountOrderByAggregateInputSchema';
import { OAuthTokenMaxOrderByAggregateInputSchema } from './OAuthTokenMaxOrderByAggregateInputSchema';
import { OAuthTokenMinOrderByAggregateInputSchema } from './OAuthTokenMinOrderByAggregateInputSchema';

export const OAuthTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.OAuthTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  appId: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scopes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OAuthTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OAuthTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OAuthTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export default OAuthTokenOrderByWithAggregationInputSchema;
