import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereInputSchema } from './ResourceTemplateWhereInputSchema';

export const ResourceTemplateScalarRelationFilterSchema: z.ZodType<Prisma.ResourceTemplateScalarRelationFilter> = z.object({
  is: z.lazy(() => ResourceTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => ResourceTemplateWhereInputSchema).optional()
}).strict();

export default ResourceTemplateScalarRelationFilterSchema;
