import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// INVOICE PAYMENT SCHEMA
/////////////////////////////////////////

export const InvoicePaymentSchema = z.object({
  id: z.string().cuid(),
  invoiceId: z.string(),
  paymentId: z.string(),
  amountPaid: z.instanceof(Prisma.Decimal, { message: "Field 'amountPaid' must be a Decimal. Location: ['Models', 'InvoicePayment']"}),
  paidAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type InvoicePayment = z.infer<typeof InvoicePaymentSchema>

export default InvoicePaymentSchema;
