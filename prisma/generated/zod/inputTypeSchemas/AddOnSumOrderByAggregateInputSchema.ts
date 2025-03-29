import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AddOnSumOrderByAggregateInputSchema: z.ZodType<Prisma.AddOnSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AddOnSumOrderByAggregateInputSchema;
