import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactWhereInputSchema } from './MerchantContactWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantContactWhereUniqueInputSchema: z.ZodType<Prisma.MerchantContactWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MerchantContactWhereInputSchema),z.lazy(() => MerchantContactWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantContactWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantContactWhereInputSchema),z.lazy(() => MerchantContactWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
}).strict());

export default MerchantContactWhereUniqueInputSchema;
