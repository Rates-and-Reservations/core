import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ApiUsageLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ApiUsageLogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ApiUsageLogScalarWhereWithAggregatesInputSchema),z.lazy(() => ApiUsageLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApiUsageLogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApiUsageLogScalarWhereWithAggregatesInputSchema),z.lazy(() => ApiUsageLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  apiKeyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endpoint: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  statusCode: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  responseTimeMs: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rateLimitExceeded: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ApiUsageLogScalarWhereWithAggregatesInputSchema;
