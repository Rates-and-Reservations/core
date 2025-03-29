import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactUpdateManyMutationInputSchema } from '../inputTypeSchemas/MerchantContactUpdateManyMutationInputSchema'
import { MerchantContactUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MerchantContactUncheckedUpdateManyInputSchema'
import { MerchantContactWhereInputSchema } from '../inputTypeSchemas/MerchantContactWhereInputSchema'

export const MerchantContactUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MerchantContactUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MerchantContactUpdateManyMutationInputSchema,MerchantContactUncheckedUpdateManyInputSchema ]),
  where: MerchantContactWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantContactUpdateManyAndReturnArgsSchema;
