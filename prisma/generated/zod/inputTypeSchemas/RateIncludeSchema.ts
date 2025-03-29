import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { DiscountFindManyArgsSchema } from "../outputTypeSchemas/DiscountFindManyArgsSchema"
import { RateAddOnFindManyArgsSchema } from "../outputTypeSchemas/RateAddOnFindManyArgsSchema"
import { BookingRateSnapshotFindManyArgsSchema } from "../outputTypeSchemas/BookingRateSnapshotFindManyArgsSchema"
import { RateCountOutputTypeArgsSchema } from "../outputTypeSchemas/RateCountOutputTypeArgsSchema"

export const RateIncludeSchema: z.ZodType<Prisma.RateInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  Discount: z.union([z.boolean(),z.lazy(() => DiscountFindManyArgsSchema)]).optional(),
  RateAddOn: z.union([z.boolean(),z.lazy(() => RateAddOnFindManyArgsSchema)]).optional(),
  BookingRateSnapshot: z.union([z.boolean(),z.lazy(() => BookingRateSnapshotFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RateIncludeSchema;
