import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereInputSchema } from './CancellationRequestWhereInputSchema';

export const CancellationRequestListRelationFilterSchema: z.ZodType<Prisma.CancellationRequestListRelationFilter> = z.object({
  every: z.lazy(() => CancellationRequestWhereInputSchema).optional(),
  some: z.lazy(() => CancellationRequestWhereInputSchema).optional(),
  none: z.lazy(() => CancellationRequestWhereInputSchema).optional()
}).strict();

export default CancellationRequestListRelationFilterSchema;
