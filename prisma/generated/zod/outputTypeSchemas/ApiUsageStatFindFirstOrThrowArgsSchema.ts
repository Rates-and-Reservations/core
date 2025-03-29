import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatIncludeSchema } from '../inputTypeSchemas/ApiUsageStatIncludeSchema'
import { ApiUsageStatWhereInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereInputSchema'
import { ApiUsageStatOrderByWithRelationInputSchema } from '../inputTypeSchemas/ApiUsageStatOrderByWithRelationInputSchema'
import { ApiUsageStatWhereUniqueInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereUniqueInputSchema'
import { ApiUsageStatScalarFieldEnumSchema } from '../inputTypeSchemas/ApiUsageStatScalarFieldEnumSchema'
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

export const ApiUsageStatFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ApiUsageStatFindFirstOrThrowArgs> = z.object({
  select: ApiUsageStatSelectSchema.optional(),
  include: z.lazy(() => ApiUsageStatIncludeSchema).optional(),
  where: ApiUsageStatWhereInputSchema.optional(),
  orderBy: z.union([ ApiUsageStatOrderByWithRelationInputSchema.array(),ApiUsageStatOrderByWithRelationInputSchema ]).optional(),
  cursor: ApiUsageStatWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ApiUsageStatScalarFieldEnumSchema,ApiUsageStatScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ApiUsageStatFindFirstOrThrowArgsSchema;
