import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AddOnAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AddOnAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AddOnAvgOrderByAggregateInputSchema;
