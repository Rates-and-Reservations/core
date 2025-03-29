import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const OAuthTokenScalarWhereInputSchema: z.ZodType<Prisma.OAuthTokenScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OAuthTokenScalarWhereInputSchema),z.lazy(() => OAuthTokenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OAuthTokenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OAuthTokenScalarWhereInputSchema),z.lazy(() => OAuthTokenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  scopes: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default OAuthTokenScalarWhereInputSchema;
