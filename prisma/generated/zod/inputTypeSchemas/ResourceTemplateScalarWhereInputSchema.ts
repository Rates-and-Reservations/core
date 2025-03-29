import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ResourceTemplateScalarWhereInputSchema: z.ZodType<Prisma.ResourceTemplateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceTemplateScalarWhereInputSchema),z.lazy(() => ResourceTemplateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceTemplateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceTemplateScalarWhereInputSchema),z.lazy(() => ResourceTemplateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  defaultFields: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ResourceTemplateScalarWhereInputSchema;
