import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const MerchantAssetScalarWhereInputSchema: z.ZodType<Prisma.MerchantAssetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantAssetScalarWhereInputSchema),z.lazy(() => MerchantAssetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantAssetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantAssetScalarWhereInputSchema),z.lazy(() => MerchantAssetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default MerchantAssetScalarWhereInputSchema;
