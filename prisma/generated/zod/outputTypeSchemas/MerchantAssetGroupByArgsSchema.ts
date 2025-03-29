import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetWhereInputSchema } from '../inputTypeSchemas/MerchantAssetWhereInputSchema'
import { MerchantAssetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MerchantAssetOrderByWithAggregationInputSchema'
import { MerchantAssetScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantAssetScalarFieldEnumSchema'
import { MerchantAssetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MerchantAssetScalarWhereWithAggregatesInputSchema'

export const MerchantAssetGroupByArgsSchema: z.ZodType<Prisma.MerchantAssetGroupByArgs> = z.object({
  where: MerchantAssetWhereInputSchema.optional(),
  orderBy: z.union([ MerchantAssetOrderByWithAggregationInputSchema.array(),MerchantAssetOrderByWithAggregationInputSchema ]).optional(),
  by: MerchantAssetScalarFieldEnumSchema.array(),
  having: MerchantAssetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantAssetGroupByArgsSchema;
