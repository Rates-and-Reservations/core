import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { AppCreateNestedOneWithoutOAuthTokenInputSchema } from './AppCreateNestedOneWithoutOAuthTokenInputSchema';
import { MerchantCreateNestedOneWithoutOAuthTokenInputSchema } from './MerchantCreateNestedOneWithoutOAuthTokenInputSchema';

export const OAuthTokenCreateInputSchema: z.ZodType<Prisma.OAuthTokenCreateInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string(),
  refreshToken: z.string().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  app: z.lazy(() => AppCreateNestedOneWithoutOAuthTokenInputSchema),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutOAuthTokenInputSchema)
}).strict();

export default OAuthTokenCreateInputSchema;
