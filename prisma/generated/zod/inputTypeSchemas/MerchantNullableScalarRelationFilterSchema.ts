import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantNullableScalarRelationFilterSchema: z.ZodType<Prisma.MerchantNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => MerchantWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MerchantWhereInputSchema).optional().nullable()
}).strict();

export default MerchantNullableScalarRelationFilterSchema;
