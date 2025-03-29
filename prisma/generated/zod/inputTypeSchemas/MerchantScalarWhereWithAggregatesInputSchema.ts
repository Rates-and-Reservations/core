import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumBusinessTypeWithAggregatesFilterSchema } from './EnumBusinessTypeWithAggregatesFilterSchema';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const MerchantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MerchantScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantScalarWhereWithAggregatesInputSchema),z.lazy(() => MerchantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantScalarWhereWithAggregatesInputSchema),z.lazy(() => MerchantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  businessType: z.union([ z.lazy(() => EnumBusinessTypeWithAggregatesFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  tradingName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  vatNumber: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  industry: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default MerchantScalarWhereWithAggregatesInputSchema;
