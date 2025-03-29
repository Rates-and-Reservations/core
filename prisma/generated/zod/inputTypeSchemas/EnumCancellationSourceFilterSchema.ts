import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationSourceSchema } from './CancellationSourceSchema';
import { NestedEnumCancellationSourceFilterSchema } from './NestedEnumCancellationSourceFilterSchema';

export const EnumCancellationSourceFilterSchema: z.ZodType<Prisma.EnumCancellationSourceFilter> = z.object({
  equals: z.lazy(() => CancellationSourceSchema).optional(),
  in: z.lazy(() => CancellationSourceSchema).array().optional(),
  notIn: z.lazy(() => CancellationSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => CancellationSourceSchema),z.lazy(() => NestedEnumCancellationSourceFilterSchema) ]).optional(),
}).strict();

export default EnumCancellationSourceFilterSchema;
