import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereInputSchema } from './OAuthTokenWhereInputSchema';

export const OAuthTokenListRelationFilterSchema: z.ZodType<Prisma.OAuthTokenListRelationFilter> = z.object({
  every: z.lazy(() => OAuthTokenWhereInputSchema).optional(),
  some: z.lazy(() => OAuthTokenWhereInputSchema).optional(),
  none: z.lazy(() => OAuthTokenWhereInputSchema).optional()
}).strict();

export default OAuthTokenListRelationFilterSchema;
