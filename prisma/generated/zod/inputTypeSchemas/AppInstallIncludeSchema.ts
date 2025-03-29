import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { AppArgsSchema } from "../outputTypeSchemas/AppArgsSchema"
import { AppInstallScopeFindManyArgsSchema } from "../outputTypeSchemas/AppInstallScopeFindManyArgsSchema"
import { AppInstallCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppInstallCountOutputTypeArgsSchema"

export const AppInstallIncludeSchema: z.ZodType<Prisma.AppInstallInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  app: z.union([z.boolean(),z.lazy(() => AppArgsSchema)]).optional(),
  AppInstallScope: z.union([z.boolean(),z.lazy(() => AppInstallScopeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppInstallCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AppInstallIncludeSchema;
