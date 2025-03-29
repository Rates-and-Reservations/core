import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { RateFindManyArgsSchema } from "../outputTypeSchemas/RateFindManyArgsSchema"
import { DiscountCountOutputTypeArgsSchema } from "../outputTypeSchemas/DiscountCountOutputTypeArgsSchema"

export const DiscountIncludeSchema: z.ZodType<Prisma.DiscountInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  appliesToRates: z.union([z.boolean(),z.lazy(() => RateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DiscountCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DiscountIncludeSchema;
