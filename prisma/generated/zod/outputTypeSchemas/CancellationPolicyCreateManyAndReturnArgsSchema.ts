import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyCreateManyInputSchema } from '../inputTypeSchemas/CancellationPolicyCreateManyInputSchema'

export const CancellationPolicyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CancellationPolicyCreateManyAndReturnArgs> = z.object({
  data: z.union([ CancellationPolicyCreateManyInputSchema,CancellationPolicyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CancellationPolicyCreateManyAndReturnArgsSchema;
