import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereInputSchema } from './ResourceTemplateWhereInputSchema';

export const ResourceTemplateListRelationFilterSchema: z.ZodType<Prisma.ResourceTemplateListRelationFilter> = z.object({
  every: z.lazy(() => ResourceTemplateWhereInputSchema).optional(),
  some: z.lazy(() => ResourceTemplateWhereInputSchema).optional(),
  none: z.lazy(() => ResourceTemplateWhereInputSchema).optional()
}).strict();

export default ResourceTemplateListRelationFilterSchema;
