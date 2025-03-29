import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantWhereInputSchema } from '../inputTypeSchemas/MerchantWhereInputSchema'
import { MerchantOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MerchantOrderByWithAggregationInputSchema'
import { MerchantScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantScalarFieldEnumSchema'
import { MerchantScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MerchantScalarWhereWithAggregatesInputSchema'

export const MerchantGroupByArgsSchema: z.ZodType<Prisma.MerchantGroupByArgs> = z.object({
  where: MerchantWhereInputSchema.optional(),
  orderBy: z.union([ MerchantOrderByWithAggregationInputSchema.array(),MerchantOrderByWithAggregationInputSchema ]).optional(),
  by: MerchantScalarFieldEnumSchema.array(),
  having: MerchantScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantGroupByArgsSchema;
