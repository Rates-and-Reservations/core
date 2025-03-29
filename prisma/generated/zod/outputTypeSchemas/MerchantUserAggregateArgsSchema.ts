import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserWhereInputSchema } from '../inputTypeSchemas/MerchantUserWhereInputSchema'
import { MerchantUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantUserOrderByWithRelationInputSchema'
import { MerchantUserWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantUserWhereUniqueInputSchema'

export const MerchantUserAggregateArgsSchema: z.ZodType<Prisma.MerchantUserAggregateArgs> = z.object({
  where: MerchantUserWhereInputSchema.optional(),
  orderBy: z.union([ MerchantUserOrderByWithRelationInputSchema.array(),MerchantUserOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MerchantUserAggregateArgsSchema;
