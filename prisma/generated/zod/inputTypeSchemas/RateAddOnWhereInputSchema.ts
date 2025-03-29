import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RateScalarRelationFilterSchema } from './RateScalarRelationFilterSchema';
import { RateWhereInputSchema } from './RateWhereInputSchema';
import { AddOnScalarRelationFilterSchema } from './AddOnScalarRelationFilterSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const RateAddOnWhereInputSchema: z.ZodType<Prisma.RateAddOnWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RateAddOnWhereInputSchema),z.lazy(() => RateAddOnWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RateAddOnWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RateAddOnWhereInputSchema),z.lazy(() => RateAddOnWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  rate: z.union([ z.lazy(() => RateScalarRelationFilterSchema),z.lazy(() => RateWhereInputSchema) ]).optional(),
  addOn: z.union([ z.lazy(() => AddOnScalarRelationFilterSchema),z.lazy(() => AddOnWhereInputSchema) ]).optional(),
}).strict();

export default RateAddOnWhereInputSchema;
