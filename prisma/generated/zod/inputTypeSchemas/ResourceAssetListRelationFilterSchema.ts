import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereInputSchema } from './ResourceAssetWhereInputSchema';

export const ResourceAssetListRelationFilterSchema: z.ZodType<Prisma.ResourceAssetListRelationFilter> = z.object({
  every: z.lazy(() => ResourceAssetWhereInputSchema).optional(),
  some: z.lazy(() => ResourceAssetWhereInputSchema).optional(),
  none: z.lazy(() => ResourceAssetWhereInputSchema).optional()
}).strict();

export default ResourceAssetListRelationFilterSchema;
