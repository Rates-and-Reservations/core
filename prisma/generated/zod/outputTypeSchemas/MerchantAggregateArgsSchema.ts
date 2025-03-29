import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantWhereInputSchema } from '../inputTypeSchemas/MerchantWhereInputSchema'
import { MerchantOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantOrderByWithRelationInputSchema'
import { MerchantWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantWhereUniqueInputSchema'

export const MerchantAggregateArgsSchema: z.ZodType<Prisma.MerchantAggregateArgs> = z.object({
  where: MerchantWhereInputSchema.optional(),
  orderBy: z.union([ MerchantOrderByWithRelationInputSchema.array(),MerchantOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantAggregateArgsSchema;
