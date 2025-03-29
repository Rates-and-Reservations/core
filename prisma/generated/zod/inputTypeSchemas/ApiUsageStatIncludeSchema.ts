import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ApiKeyArgsSchema } from "../outputTypeSchemas/ApiKeyArgsSchema"

export const ApiUsageStatIncludeSchema: z.ZodType<Prisma.ApiUsageStatInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  apiKey: z.union([z.boolean(),z.lazy(() => ApiKeyArgsSchema)]).optional(),
}).strict()

export default ApiUsageStatIncludeSchema;
