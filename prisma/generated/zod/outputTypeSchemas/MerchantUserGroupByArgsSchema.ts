import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserWhereInputSchema } from '../inputTypeSchemas/MerchantUserWhereInputSchema'
import { MerchantUserOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MerchantUserOrderByWithAggregationInputSchema'
import { MerchantUserScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantUserScalarFieldEnumSchema'
import { MerchantUserScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MerchantUserScalarWhereWithAggregatesInputSchema'

export const MerchantUserGroupByArgsSchema: z.ZodType<Prisma.MerchantUserGroupByArgs> = z.object({
  where: MerchantUserWhereInputSchema.optional(),
  orderBy: z.union([ MerchantUserOrderByWithAggregationInputSchema.array(),MerchantUserOrderByWithAggregationInputSchema ]).optional(),
  by: MerchantUserScalarFieldEnumSchema.array(),
  having: MerchantUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantUserGroupByArgsSchema;
