import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppArgsSchema } from "../outputTypeSchemas/AppArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"

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

export default OAuthTokenSelectSchema;
