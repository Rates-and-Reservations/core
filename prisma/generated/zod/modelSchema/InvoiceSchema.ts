import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { InvoiceStatusSchema } from '../inputTypeSchemas/InvoiceStatusSchema'

/////////////////////////////////////////
// INVOICE SCHEMA
/////////////////////////////////////////

export const InvoiceSchema = z.object({
  status: InvoiceStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  bookingId: z.string().nullable(),
  customerId: z.string().nullable(),
  invoiceNumber: z.string(),
  currency: z.string(),
  subtotal: z.instanceof(Prisma.Decimal, { message: "Field 'subtotal' must be a Decimal. Location: ['Models', 'Invoice']"}),
  taxAmount: z.instanceof(Prisma.Decimal, { message: "Field 'taxAmount' must be a Decimal. Location: ['Models', 'Invoice']"}),
  discountAmount: z.instanceof(Prisma.Decimal, { message: "Field 'discountAmount' must be a Decimal. Location: ['Models', 'Invoice']"}),
  totalAmount: z.instanceof(Prisma.Decimal, { message: "Field 'totalAmount' must be a Decimal. Location: ['Models', 'Invoice']"}),
  issueDate: z.coerce.date(),
  dueDate: z.coerce.date().nullable(),
  paidAt: z.coerce.date().nullable(),
  notes: z.string().nullable(),
  pdfUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Invoice = z.infer<typeof InvoiceSchema>

export default InvoiceSchema;
