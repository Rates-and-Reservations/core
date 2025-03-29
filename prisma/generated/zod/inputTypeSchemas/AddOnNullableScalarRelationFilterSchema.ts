import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const AddOnNullableScalarRelationFilterSchema: z.ZodType<Prisma.AddOnNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => AddOnWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AddOnWhereInputSchema).optional().nullable()
}).strict();

export default AddOnNullableScalarRelationFilterSchema;
