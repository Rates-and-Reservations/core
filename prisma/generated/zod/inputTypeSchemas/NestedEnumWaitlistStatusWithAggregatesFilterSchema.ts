import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumWaitlistStatusFilterSchema } from './NestedEnumWaitlistStatusFilterSchema';

export const NestedEnumWaitlistStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWaitlistStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WaitlistStatusSchema).optional(),
  in: z.lazy(() => WaitlistStatusSchema).array().optional(),
  notIn: z.lazy(() => WaitlistStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => WaitlistStatusSchema),z.lazy(() => NestedEnumWaitlistStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWaitlistStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWaitlistStatusFilterSchema).optional()
}).strict();

export default NestedEnumWaitlistStatusWithAggregatesFilterSchema;
