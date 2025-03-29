import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereInputSchema } from './ResourceAssetWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ResourceScalarRelationFilterSchema } from './ResourceScalarRelationFilterSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { MerchantAssetScalarRelationFilterSchema } from './MerchantAssetScalarRelationFilterSchema';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';

export const ResourceAssetWhereUniqueInputSchema: z.ZodType<Prisma.ResourceAssetWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ResourceAssetWhereInputSchema),z.lazy(() => ResourceAssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceAssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceAssetWhereInputSchema),z.lazy(() => ResourceAssetWhereInputSchema).array() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isPrimary: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  resource: z.union([ z.lazy(() => ResourceScalarRelationFilterSchema),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  asset: z.union([ z.lazy(() => MerchantAssetScalarRelationFilterSchema),z.lazy(() => MerchantAssetWhereInputSchema) ]).optional(),
}).strict());

export default ResourceAssetWhereUniqueInputSchema;
