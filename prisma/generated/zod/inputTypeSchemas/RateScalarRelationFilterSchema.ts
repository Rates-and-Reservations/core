import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereInputSchema } from './RateWhereInputSchema';

export const RateScalarRelationFilterSchema: z.ZodType<Prisma.RateScalarRelationFilter> = z.object({
  is: z.lazy(() => RateWhereInputSchema).optional(),
  isNot: z.lazy(() => RateWhereInputSchema).optional()
}).strict();

export default RateScalarRelationFilterSchema;
