import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { RateFindManyArgsSchema } from "../outputTypeSchemas/RateFindManyArgsSchema"
import { DiscountCountOutputTypeArgsSchema } from "../outputTypeSchemas/DiscountCountOutputTypeArgsSchema"

export const DiscountSelectSchema: z.ZodType<Prisma.DiscountSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  discountType: z.boolean().optional(),
  amount: z.boolean().optional(),
  usageLimit: z.boolean().optional(),
  usedCount: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  appliesToRates: z.union([z.boolean(),z.lazy(() => RateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DiscountCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DiscountSelectSchema;
