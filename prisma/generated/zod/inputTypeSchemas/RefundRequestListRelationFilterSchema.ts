import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereInputSchema } from './RefundRequestWhereInputSchema';

export const RefundRequestListRelationFilterSchema: z.ZodType<Prisma.RefundRequestListRelationFilter> = z.object({
  every: z.lazy(() => RefundRequestWhereInputSchema).optional(),
  some: z.lazy(() => RefundRequestWhereInputSchema).optional(),
  none: z.lazy(() => RefundRequestWhereInputSchema).optional()
}).strict();

export default RefundRequestListRelationFilterSchema;
