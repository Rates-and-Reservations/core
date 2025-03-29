import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogCreateManyInputSchema } from '../inputTypeSchemas/RefundLogCreateManyInputSchema'

export const RefundLogCreateManyArgsSchema: z.ZodType<Prisma.RefundLogCreateManyArgs> = z.object({
  data: z.union([ RefundLogCreateManyInputSchema,RefundLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RefundLogCreateManyArgsSchema;
