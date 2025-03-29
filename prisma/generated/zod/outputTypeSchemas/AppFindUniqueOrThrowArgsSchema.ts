import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppIncludeSchema } from '../inputTypeSchemas/AppIncludeSchema'
import { AppWhereUniqueInputSchema } from '../inputTypeSchemas/AppWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { AppInstallFindManyArgsSchema } from "../outputTypeSchemas/AppInstallFindManyArgsSchema"
import { OAuthTokenFindManyArgsSchema } from "../outputTypeSchemas/OAuthTokenFindManyArgsSchema"
import { AppCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppSelectSchema: z.ZodType<Prisma.AppSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  websiteUrl: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  clientSecret: z.boolean().optional(),
  redirectUrls: z.boolean().optional(),
  webhookUrl: z.boolean().optional(),
  scopes: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  AppInstall: z.union([z.boolean(),z.lazy(() => AppInstallFindManyArgsSchema)]).optional(),
  OAuthToken: z.union([z.boolean(),z.lazy(() => OAuthTokenFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AppFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AppFindUniqueOrThrowArgs> = z.object({
  select: AppSelectSchema.optional(),
  include: z.lazy(() => AppIncludeSchema).optional(),
  where: AppWhereUniqueInputSchema,
}).strict() ;

export default AppFindUniqueOrThrowArgsSchema;
