import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallIncludeSchema } from '../inputTypeSchemas/AppInstallIncludeSchema'
import { AppInstallCreateInputSchema } from '../inputTypeSchemas/AppInstallCreateInputSchema'
import { AppInstallUncheckedCreateInputSchema } from '../inputTypeSchemas/AppInstallUncheckedCreateInputSchema'
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

export const AppInstallCreateArgsSchema: z.ZodType<Prisma.AppInstallCreateArgs> = z.object({
  select: AppInstallSelectSchema.optional(),
  include: z.lazy(() => AppInstallIncludeSchema).optional(),
  data: z.union([ AppInstallCreateInputSchema,AppInstallUncheckedCreateInputSchema ]),
}).strict() ;

export default AppInstallCreateArgsSchema;
