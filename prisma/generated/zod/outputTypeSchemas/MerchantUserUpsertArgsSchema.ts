import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserIncludeSchema } from '../inputTypeSchemas/MerchantUserIncludeSchema'
import { MerchantUserWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantUserWhereUniqueInputSchema'
import { MerchantUserCreateInputSchema } from '../inputTypeSchemas/MerchantUserCreateInputSchema'
import { MerchantUserUncheckedCreateInputSchema } from '../inputTypeSchemas/MerchantUserUncheckedCreateInputSchema'
import { MerchantUserUpdateInputSchema } from '../inputTypeSchemas/MerchantUserUpdateInputSchema'
import { MerchantUserUncheckedUpdateInputSchema } from '../inputTypeSchemas/MerchantUserUncheckedUpdateInputSchema'
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

export const MerchantUserUpsertArgsSchema: z.ZodType<Prisma.MerchantUserUpsertArgs> = z.object({
  select: MerchantUserSelectSchema.optional(),
  include: z.lazy(() => MerchantUserIncludeSchema).optional(),
  where: MerchantUserWhereUniqueInputSchema,
  create: z.union([ MerchantUserCreateInputSchema,MerchantUserUncheckedCreateInputSchema ]),
  update: z.union([ MerchantUserUpdateInputSchema,MerchantUserUncheckedUpdateInputSchema ]),
}).strict() ;

export default MerchantUserUpsertArgsSchema;
