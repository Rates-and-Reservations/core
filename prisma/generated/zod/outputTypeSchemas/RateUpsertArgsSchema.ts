import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateIncludeSchema } from '../inputTypeSchemas/RateIncludeSchema'
import { RateWhereUniqueInputSchema } from '../inputTypeSchemas/RateWhereUniqueInputSchema'
import { RateCreateInputSchema } from '../inputTypeSchemas/RateCreateInputSchema'
import { RateUncheckedCreateInputSchema } from '../inputTypeSchemas/RateUncheckedCreateInputSchema'
import { RateUpdateInputSchema } from '../inputTypeSchemas/RateUpdateInputSchema'
import { RateUncheckedUpdateInputSchema } from '../inputTypeSchemas/RateUncheckedUpdateInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { DiscountFindManyArgsSchema } from "../outputTypeSchemas/DiscountFindManyArgsSchema"
import { RateAddOnFindManyArgsSchema } from "../outputTypeSchemas/RateAddOnFindManyArgsSchema"
import { BookingRateSnapshotFindManyArgsSchema } from "../outputTypeSchemas/BookingRateSnapshotFindManyArgsSchema"
import { RateCountOutputTypeArgsSchema } from "../outputTypeSchemas/RateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RateSelectSchema: z.ZodType<Prisma.RateSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  currency: z.boolean().optional(),
  durationType: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  orderIndex: z.boolean().optional(),
  bookingStartDate: z.boolean().optional(),
  bookingEndDate: z.boolean().optional(),
  usageStartDate: z.boolean().optional(),
  usageEndDate: z.boolean().optional(),
  taxType: z.boolean().optional(),
  taxAmount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  Discount: z.union([z.boolean(),z.lazy(() => DiscountFindManyArgsSchema)]).optional(),
  RateAddOn: z.union([z.boolean(),z.lazy(() => RateAddOnFindManyArgsSchema)]).optional(),
  BookingRateSnapshot: z.union([z.boolean(),z.lazy(() => BookingRateSnapshotFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RateUpsertArgsSchema: z.ZodType<Prisma.RateUpsertArgs> = z.object({
  select: RateSelectSchema.optional(),
  include: z.lazy(() => RateIncludeSchema).optional(),
  where: RateWhereUniqueInputSchema,
  create: z.union([ RateCreateInputSchema,RateUncheckedCreateInputSchema ]),
  update: z.union([ RateUpdateInputSchema,RateUncheckedUpdateInputSchema ]),
}).strict() ;

export default RateUpsertArgsSchema;
