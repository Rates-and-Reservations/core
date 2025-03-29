import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { NestedEnumBusinessTypeFilterSchema } from './NestedEnumBusinessTypeFilterSchema';

export const EnumBusinessTypeFilterSchema: z.ZodType<Prisma.EnumBusinessTypeFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeFilterSchema) ]).optional(),
}).strict();

export default EnumBusinessTypeFilterSchema;
