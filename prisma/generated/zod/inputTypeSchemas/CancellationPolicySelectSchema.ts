import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceBookingConfigFindManyArgsSchema } from "../outputTypeSchemas/ResourceBookingConfigFindManyArgsSchema"
import { CancellationPolicyCountOutputTypeArgsSchema } from "../outputTypeSchemas/CancellationPolicyCountOutputTypeArgsSchema"

export const CancellationPolicySelectSchema: z.ZodType<Prisma.CancellationPolicySelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  refundType: z.boolean().optional(),
  refundAmount: z.boolean().optional(),
  timeLimitHours: z.boolean().optional(),
  appliesTo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  ResourceBookingConfig: z.union([z.boolean(),z.lazy(() => ResourceBookingConfigFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CancellationPolicyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CancellationPolicySelectSchema;
