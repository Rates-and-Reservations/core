import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereInputSchema } from './RateWhereInputSchema';

export const RateListRelationFilterSchema: z.ZodType<Prisma.RateListRelationFilter> = z.object({
  every: z.lazy(() => RateWhereInputSchema).optional(),
  some: z.lazy(() => RateWhereInputSchema).optional(),
  none: z.lazy(() => RateWhereInputSchema).optional()
}).strict();

export default RateListRelationFilterSchema;
