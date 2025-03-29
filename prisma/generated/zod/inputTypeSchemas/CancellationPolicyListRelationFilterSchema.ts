import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereInputSchema } from './CancellationPolicyWhereInputSchema';

export const CancellationPolicyListRelationFilterSchema: z.ZodType<Prisma.CancellationPolicyListRelationFilter> = z.object({
  every: z.lazy(() => CancellationPolicyWhereInputSchema).optional(),
  some: z.lazy(() => CancellationPolicyWhereInputSchema).optional(),
  none: z.lazy(() => CancellationPolicyWhereInputSchema).optional()
}).strict();

export default CancellationPolicyListRelationFilterSchema;
