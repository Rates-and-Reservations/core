import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserIncludeSchema } from '../inputTypeSchemas/MerchantUserIncludeSchema'
import { MerchantUserCreateInputSchema } from '../inputTypeSchemas/MerchantUserCreateInputSchema'
import { MerchantUserUncheckedCreateInputSchema } from '../inputTypeSchemas/MerchantUserUncheckedCreateInputSchema'
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

export const MerchantUserCreateArgsSchema: z.ZodType<Prisma.MerchantUserCreateArgs> = z.object({
  select: MerchantUserSelectSchema.optional(),
  include: z.lazy(() => MerchantUserIncludeSchema).optional(),
  data: z.union([ MerchantUserCreateInputSchema,MerchantUserUncheckedCreateInputSchema ]),
}).strict() ;

export default MerchantUserCreateArgsSchema;
