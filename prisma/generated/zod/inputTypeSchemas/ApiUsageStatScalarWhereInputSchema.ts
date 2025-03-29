import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const ApiUsageStatScalarWhereInputSchema: z.ZodType<Prisma.ApiUsageStatScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ApiUsageStatScalarWhereInputSchema),z.lazy(() => ApiUsageStatScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApiUsageStatScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApiUsageStatScalarWhereInputSchema),z.lazy(() => ApiUsageStatScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  apiKeyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  requestCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  successCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  errorCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rateLimitHits: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ApiUsageStatScalarWhereInputSchema;
