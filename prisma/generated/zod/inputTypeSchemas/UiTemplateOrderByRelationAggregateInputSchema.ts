import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UiTemplateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UiTemplateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UiTemplateOrderByRelationAggregateInputSchema;
