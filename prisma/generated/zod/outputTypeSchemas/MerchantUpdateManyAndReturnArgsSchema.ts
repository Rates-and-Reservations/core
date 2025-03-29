import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUpdateManyMutationInputSchema } from '../inputTypeSchemas/MerchantUpdateManyMutationInputSchema'
import { MerchantUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MerchantUncheckedUpdateManyInputSchema'
import { MerchantWhereInputSchema } from '../inputTypeSchemas/MerchantWhereInputSchema'

export const MerchantUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MerchantUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MerchantUpdateManyMutationInputSchema,MerchantUncheckedUpdateManyInputSchema ]),
  where: MerchantWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantUpdateManyAndReturnArgsSchema;
