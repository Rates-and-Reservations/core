import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentIncludeSchema } from '../inputTypeSchemas/InvoicePaymentIncludeSchema'
import { InvoicePaymentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereUniqueInputSchema'
import { InvoiceArgsSchema } from "../outputTypeSchemas/InvoiceArgsSchema"
import { PaymentActionsArgsSchema } from "../outputTypeSchemas/PaymentActionsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoicePaymentSelectSchema: z.ZodType<Prisma.InvoicePaymentSelect> = z.object({
  id: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  paymentId: z.boolean().optional(),
  amountPaid: z.boolean().optional(),
  paidAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  invoice: z.union([z.boolean(),z.lazy(() => InvoiceArgsSchema)]).optional(),
  payment: z.union([z.boolean(),z.lazy(() => PaymentActionsArgsSchema)]).optional(),
}).strict()

export const InvoicePaymentFindUniqueArgsSchema: z.ZodType<Prisma.InvoicePaymentFindUniqueArgs> = z.object({
  select: InvoicePaymentSelectSchema.optional(),
  include: z.lazy(() => InvoicePaymentIncludeSchema).optional(),
  where: InvoicePaymentWhereUniqueInputSchema,
}).strict() ;

export default InvoicePaymentFindUniqueArgsSchema;
