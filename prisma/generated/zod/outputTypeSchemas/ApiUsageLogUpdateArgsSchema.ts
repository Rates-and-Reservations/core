import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogIncludeSchema } from '../inputTypeSchemas/ApiUsageLogIncludeSchema'
import { ApiUsageLogUpdateInputSchema } from '../inputTypeSchemas/ApiUsageLogUpdateInputSchema'
import { ApiUsageLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/ApiUsageLogUncheckedUpdateInputSchema'
import { ApiUsageLogWhereUniqueInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ApiKeyArgsSchema } from "../outputTypeSchemas/ApiKeyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ApiUsageLogSelectSchema: z.ZodType<Prisma.ApiUsageLogSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  apiKeyId: z.boolean().optional(),
  endpoint: z.boolean().optional(),
  method: z.boolean().optional(),
  statusCode: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  responseTimeMs: z.boolean().optional(),
  rateLimitExceeded: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  apiKey: z.union([z.boolean(),z.lazy(() => ApiKeyArgsSchema)]).optional(),
}).strict()

export const ApiUsageLogUpdateArgsSchema: z.ZodType<Prisma.ApiUsageLogUpdateArgs> = z.object({
  select: ApiUsageLogSelectSchema.optional(),
  include: z.lazy(() => ApiUsageLogIncludeSchema).optional(),
  data: z.union([ ApiUsageLogUpdateInputSchema,ApiUsageLogUncheckedUpdateInputSchema ]),
  where: ApiUsageLogWhereUniqueInputSchema,
}).strict() ;

export default ApiUsageLogUpdateArgsSchema;
