import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereInputSchema } from './DiscountWhereInputSchema';

export const DiscountListRelationFilterSchema: z.ZodType<Prisma.DiscountListRelationFilter> = z.object({
  every: z.lazy(() => DiscountWhereInputSchema).optional(),
  some: z.lazy(() => DiscountWhereInputSchema).optional(),
  none: z.lazy(() => DiscountWhereInputSchema).optional()
}).strict();

export default DiscountListRelationFilterSchema;
