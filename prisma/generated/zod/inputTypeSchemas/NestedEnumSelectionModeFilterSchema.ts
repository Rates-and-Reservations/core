import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SelectionModeSchema } from './SelectionModeSchema';

export const NestedEnumSelectionModeFilterSchema: z.ZodType<Prisma.NestedEnumSelectionModeFilter> = z.object({
  equals: z.lazy(() => SelectionModeSchema).optional(),
  in: z.lazy(() => SelectionModeSchema).array().optional(),
  notIn: z.lazy(() => SelectionModeSchema).array().optional(),
  not: z.union([ z.lazy(() => SelectionModeSchema),z.lazy(() => NestedEnumSelectionModeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumSelectionModeFilterSchema;
