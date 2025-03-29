import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereInputSchema } from './ResourceTemplateWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantNullableScalarRelationFilterSchema } from './MerchantNullableScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { ResourceListRelationFilterSchema } from './ResourceListRelationFilterSchema';

export const ResourceTemplateWhereUniqueInputSchema: z.ZodType<Prisma.ResourceTemplateWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ResourceTemplateWhereInputSchema),z.lazy(() => ResourceTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceTemplateWhereInputSchema),z.lazy(() => ResourceTemplateWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  defaultFields: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantNullableScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional().nullable(),
  Resource: z.lazy(() => ResourceListRelationFilterSchema).optional()
}).strict());

export default ResourceTemplateWhereUniqueInputSchema;
