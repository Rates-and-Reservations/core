import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyWhereInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereInputSchema'

export const CancellationPolicyDeleteManyArgsSchema: z.ZodType<Prisma.CancellationPolicyDeleteManyArgs> = z.object({
  where: CancellationPolicyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CancellationPolicyDeleteManyArgsSchema;
