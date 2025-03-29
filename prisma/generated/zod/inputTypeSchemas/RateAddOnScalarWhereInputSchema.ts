import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RateAddOnScalarWhereInputSchema: z.ZodType<Prisma.RateAddOnScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RateAddOnScalarWhereInputSchema),z.lazy(() => RateAddOnScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RateAddOnScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RateAddOnScalarWhereInputSchema),z.lazy(() => RateAddOnScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RateAddOnScalarWhereInputSchema;
