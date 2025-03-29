import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereInputSchema } from './CancellationPolicyWhereInputSchema';

export const CancellationPolicyNullableScalarRelationFilterSchema: z.ZodType<Prisma.CancellationPolicyNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => CancellationPolicyWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CancellationPolicyWhereInputSchema).optional().nullable()
}).strict();

export default CancellationPolicyNullableScalarRelationFilterSchema;
