import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserWhereInputSchema } from './MerchantUserWhereInputSchema';

export const MerchantUserListRelationFilterSchema: z.ZodType<Prisma.MerchantUserListRelationFilter> = z.object({
  every: z.lazy(() => MerchantUserWhereInputSchema).optional(),
  some: z.lazy(() => MerchantUserWhereInputSchema).optional(),
  none: z.lazy(() => MerchantUserWhereInputSchema).optional()
}).strict();

export default MerchantUserListRelationFilterSchema;
