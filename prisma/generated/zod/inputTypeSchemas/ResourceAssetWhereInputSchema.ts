import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ResourceScalarRelationFilterSchema } from './ResourceScalarRelationFilterSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { MerchantAssetScalarRelationFilterSchema } from './MerchantAssetScalarRelationFilterSchema';
import { MerchantAssetWhereInputSchema } from './MerchantAssetWhereInputSchema';

export const ResourceAssetWhereInputSchema: z.ZodType<Prisma.ResourceAssetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceAssetWhereInputSchema),z.lazy(() => ResourceAssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceAssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceAssetWhereInputSchema),z.lazy(() => ResourceAssetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isPrimary: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  resource: z.union([ z.lazy(() => ResourceScalarRelationFilterSchema),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  asset: z.union([ z.lazy(() => MerchantAssetScalarRelationFilterSchema),z.lazy(() => MerchantAssetWhereInputSchema) ]).optional(),
}).strict();

export default ResourceAssetWhereInputSchema;
