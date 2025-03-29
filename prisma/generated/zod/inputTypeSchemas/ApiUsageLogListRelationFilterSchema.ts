import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereInputSchema } from './ApiUsageLogWhereInputSchema';

export const ApiUsageLogListRelationFilterSchema: z.ZodType<Prisma.ApiUsageLogListRelationFilter> = z.object({
  every: z.lazy(() => ApiUsageLogWhereInputSchema).optional(),
  some: z.lazy(() => ApiUsageLogWhereInputSchema).optional(),
  none: z.lazy(() => ApiUsageLogWhereInputSchema).optional()
}).strict();

export default ApiUsageLogListRelationFilterSchema;
