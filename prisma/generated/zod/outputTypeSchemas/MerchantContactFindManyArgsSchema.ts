import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactIncludeSchema } from '../inputTypeSchemas/MerchantContactIncludeSchema'
import { MerchantContactWhereInputSchema } from '../inputTypeSchemas/MerchantContactWhereInputSchema'
import { MerchantContactOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantContactOrderByWithRelationInputSchema'
import { MerchantContactWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantContactWhereUniqueInputSchema'
import { MerchantContactScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantContactScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MerchantContactSelectSchema: z.ZodType<Prisma.MerchantContactSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  postcode: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export const MerchantContactFindManyArgsSchema: z.ZodType<Prisma.MerchantContactFindManyArgs> = z.object({
  select: MerchantContactSelectSchema.optional(),
  include: z.lazy(() => MerchantContactIncludeSchema).optional(),
  where: MerchantContactWhereInputSchema.optional(),
  orderBy: z.union([ MerchantContactOrderByWithRelationInputSchema.array(),MerchantContactOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MerchantContactScalarFieldEnumSchema,MerchantContactScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MerchantContactFindManyArgsSchema;
