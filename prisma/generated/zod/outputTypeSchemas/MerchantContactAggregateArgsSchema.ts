import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactWhereInputSchema } from '../inputTypeSchemas/MerchantContactWhereInputSchema'
import { MerchantContactOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantContactOrderByWithRelationInputSchema'
import { MerchantContactWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantContactWhereUniqueInputSchema'

export const MerchantContactAggregateArgsSchema: z.ZodType<Prisma.MerchantContactAggregateArgs> = z.object({
  where: MerchantContactWhereInputSchema.optional(),
  orderBy: z.union([ MerchantContactOrderByWithRelationInputSchema.array(),MerchantContactOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantContactAggregateArgsSchema;
