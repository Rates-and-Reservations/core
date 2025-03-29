import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { AppInstallCreateNestedManyWithoutAppInputSchema } from './AppInstallCreateNestedManyWithoutAppInputSchema';
import { OAuthTokenCreateNestedManyWithoutAppInputSchema } from './OAuthTokenCreateNestedManyWithoutAppInputSchema';

export const AppCreateWithoutMerchantInputSchema: z.ZodType<Prisma.AppCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  clientId: z.string().optional().nullable(),
  clientSecret: z.string().optional().nullable(),
  redirectUrls: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  webhookUrl: z.string().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isPublic: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  AppInstall: z.lazy(() => AppInstallCreateNestedManyWithoutAppInputSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenCreateNestedManyWithoutAppInputSchema).optional()
}).strict();

export default AppCreateWithoutMerchantInputSchema;
