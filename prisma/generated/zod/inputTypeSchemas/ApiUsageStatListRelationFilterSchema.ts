import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereInputSchema } from './ApiUsageStatWhereInputSchema';

export const ApiUsageStatListRelationFilterSchema: z.ZodType<Prisma.ApiUsageStatListRelationFilter> = z.object({
  every: z.lazy(() => ApiUsageStatWhereInputSchema).optional(),
  some: z.lazy(() => ApiUsageStatWhereInputSchema).optional(),
  none: z.lazy(() => ApiUsageStatWhereInputSchema).optional()
}).strict();

export default ApiUsageStatListRelationFilterSchema;
