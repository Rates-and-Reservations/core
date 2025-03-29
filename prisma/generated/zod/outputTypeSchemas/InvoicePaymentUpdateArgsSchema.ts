import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentIncludeSchema } from '../inputTypeSchemas/InvoicePaymentIncludeSchema'
import { InvoicePaymentUpdateInputSchema } from '../inputTypeSchemas/InvoicePaymentUpdateInputSchema'
import { InvoicePaymentUncheckedUpdateInputSchema } from '../inputTypeSchemas/InvoicePaymentUncheckedUpdateInputSchema'
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

export const InvoicePaymentUpdateArgsSchema: z.ZodType<Prisma.InvoicePaymentUpdateArgs> = z.object({
  select: InvoicePaymentSelectSchema.optional(),
  include: z.lazy(() => InvoicePaymentIncludeSchema).optional(),
  data: z.union([ InvoicePaymentUpdateInputSchema,InvoicePaymentUncheckedUpdateInputSchema ]),
  where: InvoicePaymentWhereUniqueInputSchema,
}).strict() ;

export default InvoicePaymentUpdateArgsSchema;
