import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserIncludeSchema } from '../inputTypeSchemas/MerchantUserIncludeSchema'
import { MerchantUserUpdateInputSchema } from '../inputTypeSchemas/MerchantUserUpdateInputSchema'
import { MerchantUserUncheckedUpdateInputSchema } from '../inputTypeSchemas/MerchantUserUncheckedUpdateInputSchema'
import { MerchantUserWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantUserWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MerchantUserSelectSchema: z.ZodType<Prisma.MerchantUserSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  userId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export const MerchantUserUpdateArgsSchema: z.ZodType<Prisma.MerchantUserUpdateArgs> = z.object({
  select: MerchantUserSelectSchema.optional(),
  include: z.lazy(() => MerchantUserIncludeSchema).optional(),
  data: z.union([ MerchantUserUpdateInputSchema,MerchantUserUncheckedUpdateInputSchema ]),
  where: MerchantUserWhereUniqueInputSchema,
}).strict() ;

export default MerchantUserUpdateArgsSchema;
