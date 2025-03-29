import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const MerchantContactScalarWhereInputSchema: z.ZodType<Prisma.MerchantContactScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantContactScalarWhereInputSchema),z.lazy(() => MerchantContactScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantContactScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantContactScalarWhereInputSchema),z.lazy(() => MerchantContactScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default MerchantContactScalarWhereInputSchema;
