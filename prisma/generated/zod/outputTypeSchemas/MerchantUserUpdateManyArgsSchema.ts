import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserUpdateManyMutationInputSchema } from '../inputTypeSchemas/MerchantUserUpdateManyMutationInputSchema'
import { MerchantUserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MerchantUserUncheckedUpdateManyInputSchema'
import { MerchantUserWhereInputSchema } from '../inputTypeSchemas/MerchantUserWhereInputSchema'

export const MerchantUserUpdateManyArgsSchema: z.ZodType<Prisma.MerchantUserUpdateManyArgs> = z.object({
  data: z.union([ MerchantUserUpdateManyMutationInputSchema,MerchantUserUncheckedUpdateManyInputSchema ]),
  where: MerchantUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantUserUpdateManyArgsSchema;
