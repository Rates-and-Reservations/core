import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ResourceAssetScalarWhereInputSchema: z.ZodType<Prisma.ResourceAssetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceAssetScalarWhereInputSchema),z.lazy(() => ResourceAssetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceAssetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceAssetScalarWhereInputSchema),z.lazy(() => ResourceAssetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isPrimary: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ResourceAssetScalarWhereInputSchema;
