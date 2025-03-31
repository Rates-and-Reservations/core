import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserIncludeSchema } from '../inputTypeSchemas/MerchantUserIncludeSchema'
import { MerchantUserWhereInputSchema } from '../inputTypeSchemas/MerchantUserWhereInputSchema'
import { MerchantUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantUserOrderByWithRelationInputSchema'
import { MerchantUserWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantUserWhereUniqueInputSchema'
import { MerchantUserScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantUserScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MerchantUserSelectSchema: z.ZodType<Prisma.MerchantUserSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  userId: z.boolean().optional(),
  role: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export const MerchantUserFindManyArgsSchema: z.ZodType<Prisma.MerchantUserFindManyArgs> = z.object({
  select: MerchantUserSelectSchema.optional(),
  include: z.lazy(() => MerchantUserIncludeSchema).optional(),
  where: MerchantUserWhereInputSchema.optional(),
  orderBy: z.union([ MerchantUserOrderByWithRelationInputSchema.array(),MerchantUserOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MerchantUserScalarFieldEnumSchema,MerchantUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MerchantUserFindManyArgsSchema;
