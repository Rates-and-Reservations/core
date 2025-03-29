import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ApiUsageStatScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ApiUsageStatScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ApiUsageStatScalarWhereWithAggregatesInputSchema),z.lazy(() => ApiUsageStatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApiUsageStatScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApiUsageStatScalarWhereWithAggregatesInputSchema),z.lazy(() => ApiUsageStatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  apiKeyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  requestCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  successCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  errorCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rateLimitHits: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ApiUsageStatScalarWhereWithAggregatesInputSchema;
