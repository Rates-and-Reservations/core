import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { RateAddOnFindManyArgsSchema } from "../outputTypeSchemas/RateAddOnFindManyArgsSchema"
import { BookingItemAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingItemAddOnFindManyArgsSchema"
import { BookingAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingAddOnFindManyArgsSchema"
import { AddOnCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddOnCountOutputTypeArgsSchema"

export const AddOnIncludeSchema: z.ZodType<Prisma.AddOnInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  RateAddOn: z.union([z.boolean(),z.lazy(() => RateAddOnFindManyArgsSchema)]).optional(),
  BookingItemAddOn: z.union([z.boolean(),z.lazy(() => BookingItemAddOnFindManyArgsSchema)]).optional(),
  BookingAddOn: z.union([z.boolean(),z.lazy(() => BookingAddOnFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddOnCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AddOnIncludeSchema;
