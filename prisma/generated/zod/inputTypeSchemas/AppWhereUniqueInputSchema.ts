import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereInputSchema } from './AppWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { AppInstallListRelationFilterSchema } from './AppInstallListRelationFilterSchema';
import { OAuthTokenListRelationFilterSchema } from './OAuthTokenListRelationFilterSchema';

export const AppWhereUniqueInputSchema: z.ZodType<Prisma.AppWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => AppWhereInputSchema),z.lazy(() => AppWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppWhereInputSchema),z.lazy(() => AppWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logoUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  websiteUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clientId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  clientSecret: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  redirectUrls: z.lazy(() => JsonNullableFilterSchema).optional(),
  webhookUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scopes: z.lazy(() => JsonNullableFilterSchema).optional(),
  isPublic: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  AppInstall: z.lazy(() => AppInstallListRelationFilterSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenListRelationFilterSchema).optional()
}).strict());

export default AppWhereUniqueInputSchema;
