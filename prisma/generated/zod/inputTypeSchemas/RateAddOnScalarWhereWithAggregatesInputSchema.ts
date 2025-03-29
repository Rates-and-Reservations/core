import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const RateAddOnScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RateAddOnScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RateAddOnScalarWhereWithAggregatesInputSchema),z.lazy(() => RateAddOnScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RateAddOnScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RateAddOnScalarWhereWithAggregatesInputSchema),z.lazy(() => RateAddOnScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rateId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RateAddOnScalarWhereWithAggregatesInputSchema;
