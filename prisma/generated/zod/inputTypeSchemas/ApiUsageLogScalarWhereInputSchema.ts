import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ApiUsageLogScalarWhereInputSchema: z.ZodType<Prisma.ApiUsageLogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ApiUsageLogScalarWhereInputSchema),z.lazy(() => ApiUsageLogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApiUsageLogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApiUsageLogScalarWhereInputSchema),z.lazy(() => ApiUsageLogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  apiKeyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endpoint: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  statusCode: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  responseTimeMs: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rateLimitExceeded: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ApiUsageLogScalarWhereInputSchema;
