import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnUpdateManyMutationInputSchema } from '../inputTypeSchemas/RateAddOnUpdateManyMutationInputSchema'
import { RateAddOnUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RateAddOnUncheckedUpdateManyInputSchema'
import { RateAddOnWhereInputSchema } from '../inputTypeSchemas/RateAddOnWhereInputSchema'

export const RateAddOnUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RateAddOnUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RateAddOnUpdateManyMutationInputSchema,RateAddOnUncheckedUpdateManyInputSchema ]),
  where: RateAddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RateAddOnUpdateManyAndReturnArgsSchema;
