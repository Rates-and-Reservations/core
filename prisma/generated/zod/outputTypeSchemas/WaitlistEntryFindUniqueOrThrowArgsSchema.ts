import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntryIncludeSchema } from '../inputTypeSchemas/WaitlistEntryIncludeSchema'
import { WaitlistEntryWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistEntryWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WaitlistEntrySelectSchema: z.ZodType<Prisma.WaitlistEntrySelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  desiredStartTime: z.boolean().optional(),
  desiredEndTime: z.boolean().optional(),
  notes: z.boolean().optional(),
  status: z.boolean().optional(),
  priority: z.boolean().optional(),
  notifiedAt: z.boolean().optional(),
  promotedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
}).strict()

export const WaitlistEntryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WaitlistEntryFindUniqueOrThrowArgs> = z.object({
  select: WaitlistEntrySelectSchema.optional(),
  include: z.lazy(() => WaitlistEntryIncludeSchema).optional(),
  where: WaitlistEntryWhereUniqueInputSchema,
}).strict() ;

export default WaitlistEntryFindUniqueOrThrowArgsSchema;
