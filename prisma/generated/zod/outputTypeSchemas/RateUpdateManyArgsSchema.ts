import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateUpdateManyMutationInputSchema } from '../inputTypeSchemas/RateUpdateManyMutationInputSchema'
import { RateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RateUncheckedUpdateManyInputSchema'
import { RateWhereInputSchema } from '../inputTypeSchemas/RateWhereInputSchema'

export const RateUpdateManyArgsSchema: z.ZodType<Prisma.RateUpdateManyArgs> = z.object({
  data: z.union([ RateUpdateManyMutationInputSchema,RateUncheckedUpdateManyInputSchema ]),
  where: RateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RateUpdateManyArgsSchema;
