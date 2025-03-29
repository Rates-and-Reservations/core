import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactIncludeSchema } from '../inputTypeSchemas/MerchantContactIncludeSchema'
import { MerchantContactCreateInputSchema } from '../inputTypeSchemas/MerchantContactCreateInputSchema'
import { MerchantContactUncheckedCreateInputSchema } from '../inputTypeSchemas/MerchantContactUncheckedCreateInputSchema'
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

export const MerchantContactCreateArgsSchema: z.ZodType<Prisma.MerchantContactCreateArgs> = z.object({
  select: MerchantContactSelectSchema.optional(),
  include: z.lazy(() => MerchantContactIncludeSchema).optional(),
  data: z.union([ MerchantContactCreateInputSchema,MerchantContactUncheckedCreateInputSchema ]),
}).strict() ;

export default MerchantContactCreateArgsSchema;
