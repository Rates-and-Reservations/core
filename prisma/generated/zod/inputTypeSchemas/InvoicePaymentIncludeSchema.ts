import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceArgsSchema } from "../outputTypeSchemas/InvoiceArgsSchema"
import { PaymentActionsArgsSchema } from "../outputTypeSchemas/PaymentActionsArgsSchema"

export const InvoicePaymentIncludeSchema: z.ZodType<Prisma.InvoicePaymentInclude> = z.object({
  invoice: z.union([z.boolean(),z.lazy(() => InvoiceArgsSchema)]).optional(),
  payment: z.union([z.boolean(),z.lazy(() => PaymentActionsArgsSchema)]).optional(),
}).strict()

export default InvoicePaymentIncludeSchema;
