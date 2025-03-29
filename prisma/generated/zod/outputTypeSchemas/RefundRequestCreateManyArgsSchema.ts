import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestCreateManyInputSchema } from '../inputTypeSchemas/RefundRequestCreateManyInputSchema'

export const RefundRequestCreateManyArgsSchema: z.ZodType<Prisma.RefundRequestCreateManyArgs> = z.object({
  data: z.union([ RefundRequestCreateManyInputSchema,RefundRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RefundRequestCreateManyArgsSchema;
