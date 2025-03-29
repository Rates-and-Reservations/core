import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereInputSchema } from './RefundRequestWhereInputSchema';

export const RefundRequestScalarRelationFilterSchema: z.ZodType<Prisma.RefundRequestScalarRelationFilter> = z.object({
  is: z.lazy(() => RefundRequestWhereInputSchema).optional(),
  isNot: z.lazy(() => RefundRequestWhereInputSchema).optional()
}).strict();

export default RefundRequestScalarRelationFilterSchema;
