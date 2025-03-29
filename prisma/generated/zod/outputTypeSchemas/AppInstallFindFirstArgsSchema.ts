import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallIncludeSchema } from '../inputTypeSchemas/AppInstallIncludeSchema'
import { AppInstallWhereInputSchema } from '../inputTypeSchemas/AppInstallWhereInputSchema'
import { AppInstallOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppInstallOrderByWithRelationInputSchema'
import { AppInstallWhereUniqueInputSchema } from '../inputTypeSchemas/AppInstallWhereUniqueInputSchema'
import { AppInstallScalarFieldEnumSchema } from '../inputTypeSchemas/AppInstallScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { AppArgsSchema } from "../outputTypeSchemas/AppArgsSchema"
import { AppInstallScopeFindManyArgsSchema } from "../outputTypeSchemas/AppInstallScopeFindManyArgsSchema"
import { AppInstallCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppInstallCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppInstallSelectSchema: z.ZodType<Prisma.AppInstallSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  appId: z.boolean().optional(),
  status: z.boolean().optional(),
  installedAt: z.boolean().optional(),
  uninstalledAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  app: z.union([z.boolean(),z.lazy(() => AppArgsSchema)]).optional(),
  AppInstallScope: z.union([z.boolean(),z.lazy(() => AppInstallScopeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppInstallCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AppInstallFindFirstArgsSchema: z.ZodType<Prisma.AppInstallFindFirstArgs> = z.object({
  select: AppInstallSelectSchema.optional(),
  include: z.lazy(() => AppInstallIncludeSchema).optional(),
  where: AppInstallWhereInputSchema.optional(),
  orderBy: z.union([ AppInstallOrderByWithRelationInputSchema.array(),AppInstallOrderByWithRelationInputSchema ]).optional(),
  cursor: AppInstallWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppInstallScalarFieldEnumSchema,AppInstallScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AppInstallFindFirstArgsSchema;
