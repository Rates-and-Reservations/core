import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatIncludeSchema } from '../inputTypeSchemas/ApiUsageStatIncludeSchema'
import { ApiUsageStatWhereUniqueInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereUniqueInputSchema'
import { ApiUsageStatCreateInputSchema } from '../inputTypeSchemas/ApiUsageStatCreateInputSchema'
import { ApiUsageStatUncheckedCreateInputSchema } from '../inputTypeSchemas/ApiUsageStatUncheckedCreateInputSchema'
import { ApiUsageStatUpdateInputSchema } from '../inputTypeSchemas/ApiUsageStatUpdateInputSchema'
import { ApiUsageStatUncheckedUpdateInputSchema } from '../inputTypeSchemas/ApiUsageStatUncheckedUpdateInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ApiKeyArgsSchema } from "../outputTypeSchemas/ApiKeyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ApiUsageStatSelectSchema: z.ZodType<Prisma.ApiUsageStatSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  apiKeyId: z.boolean().optional(),
  date: z.boolean().optional(),
  requestCount: z.boolean().optional(),
  successCount: z.boolean().optional(),
  errorCount: z.boolean().optional(),
  rateLimitHits: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  apiKey: z.union([z.boolean(),z.lazy(() => ApiKeyArgsSchema)]).optional(),
}).strict()

export const ApiUsageStatUpsertArgsSchema: z.ZodType<Prisma.ApiUsageStatUpsertArgs> = z.object({
  select: ApiUsageStatSelectSchema.optional(),
  include: z.lazy(() => ApiUsageStatIncludeSchema).optional(),
  where: ApiUsageStatWhereUniqueInputSchema,
  create: z.union([ ApiUsageStatCreateInputSchema,ApiUsageStatUncheckedCreateInputSchema ]),
  update: z.union([ ApiUsageStatUpdateInputSchema,ApiUsageStatUncheckedUpdateInputSchema ]),
}).strict() ;

export default ApiUsageStatUpsertArgsSchema;
