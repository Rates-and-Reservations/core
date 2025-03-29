import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereInputSchema } from './ApiUsageStatWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { ApiKeyScalarRelationFilterSchema } from './ApiKeyScalarRelationFilterSchema';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';

export const ApiUsageStatWhereUniqueInputSchema: z.ZodType<Prisma.ApiUsageStatWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ApiUsageStatWhereInputSchema),z.lazy(() => ApiUsageStatWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApiUsageStatWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApiUsageStatWhereInputSchema),z.lazy(() => ApiUsageStatWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  apiKeyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  requestCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  successCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  errorCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  rateLimitHits: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  apiKey: z.union([ z.lazy(() => ApiKeyScalarRelationFilterSchema),z.lazy(() => ApiKeyWhereInputSchema) ]).optional(),
}).strict());

export default ApiUsageStatWhereUniqueInputSchema;
