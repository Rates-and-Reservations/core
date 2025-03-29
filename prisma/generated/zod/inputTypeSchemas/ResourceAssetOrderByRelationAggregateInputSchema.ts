import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceAssetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ResourceAssetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceAssetOrderByRelationAggregateInputSchema;
