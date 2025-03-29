import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const OAuthTokenUncheckedCreateWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenUncheckedCreateWithoutAppInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  accessToken: z.string(),
  refreshToken: z.string().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default OAuthTokenUncheckedCreateWithoutAppInputSchema;
