import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaxTypeSchema } from './TaxTypeSchema';
import { NestedEnumTaxTypeFilterSchema } from './NestedEnumTaxTypeFilterSchema';

export const EnumTaxTypeFilterSchema: z.ZodType<Prisma.EnumTaxTypeFilter> = z.object({
  equals: z.lazy(() => TaxTypeSchema).optional(),
  in: z.lazy(() => TaxTypeSchema).array().optional(),
  notIn: z.lazy(() => TaxTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TaxTypeSchema),z.lazy(() => NestedEnumTaxTypeFilterSchema) ]).optional(),
}).strict();

export default EnumTaxTypeFilterSchema;
