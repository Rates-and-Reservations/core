import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateIncludeSchema } from '../inputTypeSchemas/RateIncludeSchema'
import { RateWhereInputSchema } from '../inputTypeSchemas/RateWhereInputSchema'
import { RateOrderByWithRelationInputSchema } from '../inputTypeSchemas/RateOrderByWithRelationInputSchema'
import { RateWhereUniqueInputSchema } from '../inputTypeSchemas/RateWhereUniqueInputSchema'
import { RateScalarFieldEnumSchema } from '../inputTypeSchemas/RateScalarFieldEnumSchema'
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

export const RateFindManyArgsSchema: z.ZodType<Prisma.RateFindManyArgs> = z.object({
  select: RateSelectSchema.optional(),
  include: z.lazy(() => RateIncludeSchema).optional(),
  where: RateWhereInputSchema.optional(),
  orderBy: z.union([ RateOrderByWithRelationInputSchema.array(),RateOrderByWithRelationInputSchema ]).optional(),
  cursor: RateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RateScalarFieldEnumSchema,RateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RateFindManyArgsSchema;
