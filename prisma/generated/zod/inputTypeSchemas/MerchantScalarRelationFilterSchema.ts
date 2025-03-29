import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantScalarRelationFilterSchema: z.ZodType<Prisma.MerchantScalarRelationFilter> = z.object({
  is: z.lazy(() => MerchantWhereInputSchema).optional(),
  isNot: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantScalarRelationFilterSchema;
