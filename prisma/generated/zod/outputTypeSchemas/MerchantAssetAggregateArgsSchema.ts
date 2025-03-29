import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetWhereInputSchema } from '../inputTypeSchemas/MerchantAssetWhereInputSchema'
import { MerchantAssetOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantAssetOrderByWithRelationInputSchema'
import { MerchantAssetWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantAssetWhereUniqueInputSchema'

export const MerchantAssetAggregateArgsSchema: z.ZodType<Prisma.MerchantAssetAggregateArgs> = z.object({
  where: MerchantAssetWhereInputSchema.optional(),
  orderBy: z.union([ MerchantAssetOrderByWithRelationInputSchema.array(),MerchantAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantAssetAggregateArgsSchema;
