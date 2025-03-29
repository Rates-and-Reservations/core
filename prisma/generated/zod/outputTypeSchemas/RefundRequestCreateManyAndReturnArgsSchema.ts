import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestCreateManyInputSchema } from '../inputTypeSchemas/RefundRequestCreateManyInputSchema'

export const RefundRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RefundRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ RefundRequestCreateManyInputSchema,RefundRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RefundRequestCreateManyAndReturnArgsSchema;
