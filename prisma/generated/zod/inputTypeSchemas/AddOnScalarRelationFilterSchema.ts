import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const AddOnScalarRelationFilterSchema: z.ZodType<Prisma.AddOnScalarRelationFilter> = z.object({
  is: z.lazy(() => AddOnWhereInputSchema).optional(),
  isNot: z.lazy(() => AddOnWhereInputSchema).optional()
}).strict();

export default AddOnScalarRelationFilterSchema;
