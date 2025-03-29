import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestWhereInputSchema } from '../inputTypeSchemas/CancellationRequestWhereInputSchema'

export const CancellationRequestDeleteManyArgsSchema: z.ZodType<Prisma.CancellationRequestDeleteManyArgs> = z.object({
  where: CancellationRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CancellationRequestDeleteManyArgsSchema;
