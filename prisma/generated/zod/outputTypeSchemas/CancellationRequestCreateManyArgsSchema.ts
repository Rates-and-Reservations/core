import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestCreateManyInputSchema } from '../inputTypeSchemas/CancellationRequestCreateManyInputSchema'

export const CancellationRequestCreateManyArgsSchema: z.ZodType<Prisma.CancellationRequestCreateManyArgs> = z.object({
  data: z.union([ CancellationRequestCreateManyInputSchema,CancellationRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CancellationRequestCreateManyArgsSchema;
