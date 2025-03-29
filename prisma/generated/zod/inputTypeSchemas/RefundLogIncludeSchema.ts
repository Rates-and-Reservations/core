import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestArgsSchema } from "../outputTypeSchemas/RefundRequestArgsSchema"
import { PaymentActionsArgsSchema } from "../outputTypeSchemas/PaymentActionsArgsSchema"

export const RefundLogIncludeSchema: z.ZodType<Prisma.RefundLogInclude> = z.object({
  refundRequest: z.union([z.boolean(),z.lazy(() => RefundRequestArgsSchema)]).optional(),
  paymentTransaction: z.union([z.boolean(),z.lazy(() => PaymentActionsArgsSchema)]).optional(),
}).strict()

export default RefundLogIncludeSchema;
