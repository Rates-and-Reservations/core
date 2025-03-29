import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';
import { NestedEnumRateDurationTypeFilterSchema } from './NestedEnumRateDurationTypeFilterSchema';

export const EnumRateDurationTypeFilterSchema: z.ZodType<Prisma.EnumRateDurationTypeFilter> = z.object({
  equals: z.lazy(() => RateDurationTypeSchema).optional(),
  in: z.lazy(() => RateDurationTypeSchema).array().optional(),
  notIn: z.lazy(() => RateDurationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RateDurationTypeSchema),z.lazy(() => NestedEnumRateDurationTypeFilterSchema) ]).optional(),
}).strict();

export default EnumRateDurationTypeFilterSchema;
