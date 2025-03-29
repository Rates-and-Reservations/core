import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogCreateManyInputSchema } from '../inputTypeSchemas/RefundLogCreateManyInputSchema'

export const RefundLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RefundLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ RefundLogCreateManyInputSchema,RefundLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RefundLogCreateManyAndReturnArgsSchema;
