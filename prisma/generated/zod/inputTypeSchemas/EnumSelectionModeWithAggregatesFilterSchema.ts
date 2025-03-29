import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SelectionModeSchema } from './SelectionModeSchema';
import { NestedEnumSelectionModeWithAggregatesFilterSchema } from './NestedEnumSelectionModeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSelectionModeFilterSchema } from './NestedEnumSelectionModeFilterSchema';

export const EnumSelectionModeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSelectionModeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SelectionModeSchema).optional(),
  in: z.lazy(() => SelectionModeSchema).array().optional(),
  notIn: z.lazy(() => SelectionModeSchema).array().optional(),
  not: z.union([ z.lazy(() => SelectionModeSchema),z.lazy(() => NestedEnumSelectionModeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSelectionModeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSelectionModeFilterSchema).optional()
}).strict();

export default EnumSelectionModeWithAggregatesFilterSchema;
