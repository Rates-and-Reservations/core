import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ApiUsageLogFindManyArgsSchema } from "../outputTypeSchemas/ApiUsageLogFindManyArgsSchema"
import { ApiUsageStatFindManyArgsSchema } from "../outputTypeSchemas/ApiUsageStatFindManyArgsSchema"
import { ApiKeyCountOutputTypeArgsSchema } from "../outputTypeSchemas/ApiKeyCountOutputTypeArgsSchema"

export const ApiKeyIncludeSchema: z.ZodType<Prisma.ApiKeyInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  ApiUsageLog: z.union([z.boolean(),z.lazy(() => ApiUsageLogFindManyArgsSchema)]).optional(),
  ApiUsageStat: z.union([z.boolean(),z.lazy(() => ApiUsageStatFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ApiKeyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ApiKeyIncludeSchema;
