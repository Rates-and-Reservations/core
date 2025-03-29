import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetUpdateManyMutationInputSchema } from '../inputTypeSchemas/MerchantAssetUpdateManyMutationInputSchema'
import { MerchantAssetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MerchantAssetUncheckedUpdateManyInputSchema'
import { MerchantAssetWhereInputSchema } from '../inputTypeSchemas/MerchantAssetWhereInputSchema'

export const MerchantAssetUpdateManyArgsSchema: z.ZodType<Prisma.MerchantAssetUpdateManyArgs> = z.object({
  data: z.union([ MerchantAssetUpdateManyMutationInputSchema,MerchantAssetUncheckedUpdateManyInputSchema ]),
  where: MerchantAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantAssetUpdateManyArgsSchema;
