import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactIncludeSchema } from '../inputTypeSchemas/MerchantContactIncludeSchema'
import { MerchantContactWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantContactWhereUniqueInputSchema'
import { MerchantContactCreateInputSchema } from '../inputTypeSchemas/MerchantContactCreateInputSchema'
import { MerchantContactUncheckedCreateInputSchema } from '../inputTypeSchemas/MerchantContactUncheckedCreateInputSchema'
import { MerchantContactUpdateInputSchema } from '../inputTypeSchemas/MerchantContactUpdateInputSchema'
import { MerchantContactUncheckedUpdateInputSchema } from '../inputTypeSchemas/MerchantContactUncheckedUpdateInputSchema'
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

export const MerchantContactUpsertArgsSchema: z.ZodType<Prisma.MerchantContactUpsertArgs> = z.object({
  select: MerchantContactSelectSchema.optional(),
  include: z.lazy(() => MerchantContactIncludeSchema).optional(),
  where: MerchantContactWhereUniqueInputSchema,
  create: z.union([ MerchantContactCreateInputSchema,MerchantContactUncheckedCreateInputSchema ]),
  update: z.union([ MerchantContactUpdateInputSchema,MerchantContactUncheckedUpdateInputSchema ]),
}).strict() ;

export default MerchantContactUpsertArgsSchema;
