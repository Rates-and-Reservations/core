import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AppScalarRelationFilterSchema } from './AppScalarRelationFilterSchema';
import { AppWhereInputSchema } from './AppWhereInputSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const OAuthTokenWhereInputSchema: z.ZodType<Prisma.OAuthTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OAuthTokenWhereInputSchema),z.lazy(() => OAuthTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OAuthTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OAuthTokenWhereInputSchema),z.lazy(() => OAuthTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  scopes: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  app: z.union([ z.lazy(() => AppScalarRelationFilterSchema),z.lazy(() => AppWhereInputSchema) ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
}).strict();

export default OAuthTokenWhereInputSchema;
