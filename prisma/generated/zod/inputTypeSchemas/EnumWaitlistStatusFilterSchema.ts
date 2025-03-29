import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { NestedEnumWaitlistStatusFilterSchema } from './NestedEnumWaitlistStatusFilterSchema';

export const EnumWaitlistStatusFilterSchema: z.ZodType<Prisma.EnumWaitlistStatusFilter> = z.object({
  equals: z.lazy(() => WaitlistStatusSchema).optional(),
  in: z.lazy(() => WaitlistStatusSchema).array().optional(),
  notIn: z.lazy(() => WaitlistStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => WaitlistStatusSchema),z.lazy(() => NestedEnumWaitlistStatusFilterSchema) ]).optional(),
}).strict();

export default EnumWaitlistStatusFilterSchema;
