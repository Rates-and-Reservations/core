import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';

export const ApiKeyScalarRelationFilterSchema: z.ZodType<Prisma.ApiKeyScalarRelationFilter> = z.object({
  is: z.lazy(() => ApiKeyWhereInputSchema).optional(),
  isNot: z.lazy(() => ApiKeyWhereInputSchema).optional()
}).strict();

export default ApiKeyScalarRelationFilterSchema;
