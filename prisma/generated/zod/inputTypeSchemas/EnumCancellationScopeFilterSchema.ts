import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationScopeSchema } from './CancellationScopeSchema';
import { NestedEnumCancellationScopeFilterSchema } from './NestedEnumCancellationScopeFilterSchema';

export const EnumCancellationScopeFilterSchema: z.ZodType<Prisma.EnumCancellationScopeFilter> = z.object({
  equals: z.lazy(() => CancellationScopeSchema).optional(),
  in: z.lazy(() => CancellationScopeSchema).array().optional(),
  notIn: z.lazy(() => CancellationScopeSchema).array().optional(),
  not: z.union([ z.lazy(() => CancellationScopeSchema),z.lazy(() => NestedEnumCancellationScopeFilterSchema) ]).optional(),
}).strict();

export default EnumCancellationScopeFilterSchema;
