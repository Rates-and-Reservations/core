import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceAssetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ResourceAssetAvgOrderByAggregateInput> = z.object({
  sortOrder: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceAssetAvgOrderByAggregateInputSchema;
