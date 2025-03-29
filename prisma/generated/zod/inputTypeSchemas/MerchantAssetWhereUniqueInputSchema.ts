import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { ResourceAssetListRelationFilterSchema } from './ResourceAssetListRelationFilterSchema';

export const MerchantAssetWhereUniqueInputSchema: z.ZodType<Prisma.MerchantAssetWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MerchantAssetWhereInputSchema),z.lazy(() => MerchantAssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantAssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantAssetWhereInputSchema),z.lazy(() => MerchantAssetWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  publicId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetListRelationFilterSchema).optional()
}).strict());

export default MerchantAssetWhereUniqueInputSchema;
