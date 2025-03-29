import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthTokenIncludeSchema } from '../inputTypeSchemas/OAuthTokenIncludeSchema'
import { OAuthTokenWhereInputSchema } from '../inputTypeSchemas/OAuthTokenWhereInputSchema'
import { OAuthTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/OAuthTokenOrderByWithRelationInputSchema'
import { OAuthTokenWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthTokenWhereUniqueInputSchema'
import { OAuthTokenScalarFieldEnumSchema } from '../inputTypeSchemas/OAuthTokenScalarFieldEnumSchema'
import { AppArgsSchema } from "../outputTypeSchemas/AppArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OAuthTokenSelectSchema: z.ZodType<Prisma.OAuthTokenSelect> = z.object({
  id: z.boolean().optional(),
  appId: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  scopes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  app: z.union([z.boolean(),z.lazy(() => AppArgsSchema)]).optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export const OAuthTokenFindFirstArgsSchema: z.ZodType<Prisma.OAuthTokenFindFirstArgs> = z.object({
  select: OAuthTokenSelectSchema.optional(),
  include: z.lazy(() => OAuthTokenIncludeSchema).optional(),
  where: OAuthTokenWhereInputSchema.optional(),
  orderBy: z.union([ OAuthTokenOrderByWithRelationInputSchema.array(),OAuthTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: OAuthTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OAuthTokenScalarFieldEnumSchema,OAuthTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default OAuthTokenFindFirstArgsSchema;
