import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceAssetSumOrderByAggregateInputSchema: z.ZodType<Prisma.ResourceAssetSumOrderByAggregateInput> = z.object({
  sortOrder: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceAssetSumOrderByAggregateInputSchema;
