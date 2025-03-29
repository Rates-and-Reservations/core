import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactWhereInputSchema } from './MerchantContactWhereInputSchema';

export const MerchantContactListRelationFilterSchema: z.ZodType<Prisma.MerchantContactListRelationFilter> = z.object({
  every: z.lazy(() => MerchantContactWhereInputSchema).optional(),
  some: z.lazy(() => MerchantContactWhereInputSchema).optional(),
  none: z.lazy(() => MerchantContactWhereInputSchema).optional()
}).strict();

export default MerchantContactListRelationFilterSchema;
