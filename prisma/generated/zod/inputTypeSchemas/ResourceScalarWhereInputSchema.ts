import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ResourceScalarWhereInputSchema: z.ZodType<Prisma.ResourceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceScalarWhereInputSchema),z.lazy(() => ResourceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceScalarWhereInputSchema),z.lazy(() => ResourceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  templateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  tags: z.lazy(() => StringNullableListFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ResourceScalarWhereInputSchema;
