import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceNullableScalarRelationFilterSchema: z.ZodType<Prisma.ResourceNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ResourceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ResourceWhereInputSchema).optional().nullable()
}).strict();

export default ResourceNullableScalarRelationFilterSchema;
