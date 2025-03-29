import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const AddOnListRelationFilterSchema: z.ZodType<Prisma.AddOnListRelationFilter> = z.object({
  every: z.lazy(() => AddOnWhereInputSchema).optional(),
  some: z.lazy(() => AddOnWhereInputSchema).optional(),
  none: z.lazy(() => AddOnWhereInputSchema).optional()
}).strict();

export default AddOnListRelationFilterSchema;
