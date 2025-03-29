import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactWhereInputSchema } from '../inputTypeSchemas/MerchantContactWhereInputSchema'
import { MerchantContactOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MerchantContactOrderByWithAggregationInputSchema'
import { MerchantContactScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantContactScalarFieldEnumSchema'
import { MerchantContactScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MerchantContactScalarWhereWithAggregatesInputSchema'

export const MerchantContactGroupByArgsSchema: z.ZodType<Prisma.MerchantContactGroupByArgs> = z.object({
  where: MerchantContactWhereInputSchema.optional(),
  orderBy: z.union([ MerchantContactOrderByWithAggregationInputSchema.array(),MerchantContactOrderByWithAggregationInputSchema ]).optional(),
  by: MerchantContactScalarFieldEnumSchema.array(),
  having: MerchantContactScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantContactGroupByArgsSchema;
