import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereInputSchema } from './RefundLogWhereInputSchema';

export const RefundLogListRelationFilterSchema: z.ZodType<Prisma.RefundLogListRelationFilter> = z.object({
  every: z.lazy(() => RefundLogWhereInputSchema).optional(),
  some: z.lazy(() => RefundLogWhereInputSchema).optional(),
  none: z.lazy(() => RefundLogWhereInputSchema).optional()
}).strict();

export default RefundLogListRelationFilterSchema;
