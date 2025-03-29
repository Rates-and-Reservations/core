import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentIncludeSchema } from '../inputTypeSchemas/InvoicePaymentIncludeSchema'
import { InvoicePaymentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereUniqueInputSchema'
import { InvoicePaymentCreateInputSchema } from '../inputTypeSchemas/InvoicePaymentCreateInputSchema'
import { InvoicePaymentUncheckedCreateInputSchema } from '../inputTypeSchemas/InvoicePaymentUncheckedCreateInputSchema'
import { InvoicePaymentUpdateInputSchema } from '../inputTypeSchemas/InvoicePaymentUpdateInputSchema'
import { InvoicePaymentUncheckedUpdateInputSchema } from '../inputTypeSchemas/InvoicePaymentUncheckedUpdateInputSchema'
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

export const InvoicePaymentUpsertArgsSchema: z.ZodType<Prisma.InvoicePaymentUpsertArgs> = z.object({
  select: InvoicePaymentSelectSchema.optional(),
  include: z.lazy(() => InvoicePaymentIncludeSchema).optional(),
  where: InvoicePaymentWhereUniqueInputSchema,
  create: z.union([ InvoicePaymentCreateInputSchema,InvoicePaymentUncheckedCreateInputSchema ]),
  update: z.union([ InvoicePaymentUpdateInputSchema,InvoicePaymentUncheckedUpdateInputSchema ]),
}).strict() ;

export default InvoicePaymentUpsertArgsSchema;
