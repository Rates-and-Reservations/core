import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserIncludeSchema } from '../inputTypeSchemas/MerchantUserIncludeSchema'
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

export const MerchantUserFindUniqueArgsSchema: z.ZodType<Prisma.MerchantUserFindUniqueArgs> = z.object({
  select: MerchantUserSelectSchema.optional(),
  include: z.lazy(() => MerchantUserIncludeSchema).optional(),
  where: MerchantUserWhereUniqueInputSchema,
}).strict() ;

export default MerchantUserFindUniqueArgsSchema;
