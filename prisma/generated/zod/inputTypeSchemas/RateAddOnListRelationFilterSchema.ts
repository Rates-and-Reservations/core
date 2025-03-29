import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereInputSchema } from './RateAddOnWhereInputSchema';

export const RateAddOnListRelationFilterSchema: z.ZodType<Prisma.RateAddOnListRelationFilter> = z.object({
  every: z.lazy(() => RateAddOnWhereInputSchema).optional(),
  some: z.lazy(() => RateAddOnWhereInputSchema).optional(),
  none: z.lazy(() => RateAddOnWhereInputSchema).optional()
}).strict();

export default RateAddOnListRelationFilterSchema;
