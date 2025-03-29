import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyCountOutputTypeSelectSchema } from './CancellationPolicyCountOutputTypeSelectSchema';

export const CancellationPolicyCountOutputTypeArgsSchema: z.ZodType<Prisma.CancellationPolicyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CancellationPolicyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CancellationPolicyCountOutputTypeSelectSchema;
