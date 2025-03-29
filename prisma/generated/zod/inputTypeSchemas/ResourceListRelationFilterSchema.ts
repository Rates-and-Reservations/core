import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceListRelationFilterSchema: z.ZodType<Prisma.ResourceListRelationFilter> = z.object({
  every: z.lazy(() => ResourceWhereInputSchema).optional(),
  some: z.lazy(() => ResourceWhereInputSchema).optional(),
  none: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceListRelationFilterSchema;
