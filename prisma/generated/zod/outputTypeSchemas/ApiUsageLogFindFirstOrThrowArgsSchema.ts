import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogIncludeSchema } from '../inputTypeSchemas/ApiUsageLogIncludeSchema'
import { ApiUsageLogWhereInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereInputSchema'
import { ApiUsageLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/ApiUsageLogOrderByWithRelationInputSchema'
import { ApiUsageLogWhereUniqueInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereUniqueInputSchema'
import { ApiUsageLogScalarFieldEnumSchema } from '../inputTypeSchemas/ApiUsageLogScalarFieldEnumSchema'
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

export const ApiUsageLogFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ApiUsageLogFindFirstOrThrowArgs> = z.object({
  select: ApiUsageLogSelectSchema.optional(),
  include: z.lazy(() => ApiUsageLogIncludeSchema).optional(),
  where: ApiUsageLogWhereInputSchema.optional(),
  orderBy: z.union([ ApiUsageLogOrderByWithRelationInputSchema.array(),ApiUsageLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ApiUsageLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ApiUsageLogScalarFieldEnumSchema,ApiUsageLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ApiUsageLogFindFirstOrThrowArgsSchema;
