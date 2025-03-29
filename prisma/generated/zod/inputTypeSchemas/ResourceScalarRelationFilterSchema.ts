import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceScalarRelationFilterSchema: z.ZodType<Prisma.ResourceScalarRelationFilter> = z.object({
  is: z.lazy(() => ResourceWhereInputSchema).optional(),
  isNot: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceScalarRelationFilterSchema;
