import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { ApiKeyScalarRelationFilterSchema } from './ApiKeyScalarRelationFilterSchema';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';

export const ApiUsageLogWhereInputSchema: z.ZodType<Prisma.ApiUsageLogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ApiUsageLogWhereInputSchema),z.lazy(() => ApiUsageLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApiUsageLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApiUsageLogWhereInputSchema),z.lazy(() => ApiUsageLogWhereInputSchema).array() ]).optional(),
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
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  apiKey: z.union([ z.lazy(() => ApiKeyScalarRelationFilterSchema),z.lazy(() => ApiKeyWhereInputSchema) ]).optional(),
}).strict();

export default ApiUsageLogWhereInputSchema;
