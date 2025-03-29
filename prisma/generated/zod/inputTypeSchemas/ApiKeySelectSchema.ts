import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ApiUsageLogFindManyArgsSchema } from "../outputTypeSchemas/ApiUsageLogFindManyArgsSchema"
import { ApiUsageStatFindManyArgsSchema } from "../outputTypeSchemas/ApiUsageStatFindManyArgsSchema"
import { ApiKeyCountOutputTypeArgsSchema } from "../outputTypeSchemas/ApiKeyCountOutputTypeArgsSchema"

export const ApiKeySelectSchema: z.ZodType<Prisma.ApiKeySelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  keyHash: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  scopes: z.boolean().optional(),
  isActive: z.boolean().optional(),
  lastUsedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  ApiUsageLog: z.union([z.boolean(),z.lazy(() => ApiUsageLogFindManyArgsSchema)]).optional(),
  ApiUsageStat: z.union([z.boolean(),z.lazy(() => ApiUsageStatFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ApiKeyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ApiKeySelectSchema;
