import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { AppInstallFindManyArgsSchema } from "../outputTypeSchemas/AppInstallFindManyArgsSchema"
import { OAuthTokenFindManyArgsSchema } from "../outputTypeSchemas/OAuthTokenFindManyArgsSchema"
import { AppCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppCountOutputTypeArgsSchema"

export const AppIncludeSchema: z.ZodType<Prisma.AppInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  AppInstall: z.union([z.boolean(),z.lazy(() => AppInstallFindManyArgsSchema)]).optional(),
  OAuthToken: z.union([z.boolean(),z.lazy(() => OAuthTokenFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AppIncludeSchema;
