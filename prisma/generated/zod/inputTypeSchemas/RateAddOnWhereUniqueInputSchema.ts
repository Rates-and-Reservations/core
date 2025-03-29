import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereInputSchema } from './RateAddOnWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RateScalarRelationFilterSchema } from './RateScalarRelationFilterSchema';
import { RateWhereInputSchema } from './RateWhereInputSchema';
import { AddOnScalarRelationFilterSchema } from './AddOnScalarRelationFilterSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const RateAddOnWhereUniqueInputSchema: z.ZodType<Prisma.RateAddOnWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => RateAddOnWhereInputSchema),z.lazy(() => RateAddOnWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RateAddOnWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RateAddOnWhereInputSchema),z.lazy(() => RateAddOnWhereInputSchema).array() ]).optional(),
  rateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addOnId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  rate: z.union([ z.lazy(() => RateScalarRelationFilterSchema),z.lazy(() => RateWhereInputSchema) ]).optional(),
  addOn: z.union([ z.lazy(() => AddOnScalarRelationFilterSchema),z.lazy(() => AddOnWhereInputSchema) ]).optional(),
}).strict());

export default RateAddOnWhereUniqueInputSchema;
