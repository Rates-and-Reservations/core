import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutOAuthTokenInputSchema } from './MerchantCreateNestedOneWithoutOAuthTokenInputSchema';

export const OAuthTokenCreateWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenCreateWithoutAppInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string(),
  refreshToken: z.string().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutOAuthTokenInputSchema)
}).strict();

export default OAuthTokenCreateWithoutAppInputSchema;
