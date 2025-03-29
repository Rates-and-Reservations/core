import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaxTypeSchema } from './TaxTypeSchema';
import { NestedEnumTaxTypeWithAggregatesFilterSchema } from './NestedEnumTaxTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTaxTypeFilterSchema } from './NestedEnumTaxTypeFilterSchema';

export const EnumTaxTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTaxTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TaxTypeSchema).optional(),
  in: z.lazy(() => TaxTypeSchema).array().optional(),
  notIn: z.lazy(() => TaxTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TaxTypeSchema),z.lazy(() => NestedEnumTaxTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaxTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaxTypeFilterSchema).optional()
}).strict();

export default EnumTaxTypeWithAggregatesFilterSchema;
