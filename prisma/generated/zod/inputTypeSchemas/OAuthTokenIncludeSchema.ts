import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppArgsSchema } from "../outputTypeSchemas/AppArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"

export const OAuthTokenIncludeSchema: z.ZodType<Prisma.OAuthTokenInclude> = z.object({
  app: z.union([z.boolean(),z.lazy(() => AppArgsSchema)]).optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export default OAuthTokenIncludeSchema;
