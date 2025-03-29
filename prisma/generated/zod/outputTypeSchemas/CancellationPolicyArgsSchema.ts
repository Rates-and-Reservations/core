import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicySelectSchema } from '../inputTypeSchemas/CancellationPolicySelectSchema';
import { CancellationPolicyIncludeSchema } from '../inputTypeSchemas/CancellationPolicyIncludeSchema';

export const CancellationPolicyArgsSchema: z.ZodType<Prisma.CancellationPolicyDefaultArgs> = z.object({
  select: z.lazy(() => CancellationPolicySelectSchema).optional(),
  include: z.lazy(() => CancellationPolicyIncludeSchema).optional(),
}).strict();

export default CancellationPolicyArgsSchema;
