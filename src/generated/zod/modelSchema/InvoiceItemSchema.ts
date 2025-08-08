import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// INVOICE ITEM SCHEMA
/////////////////////////////////////////

/**
 * InvoiceItem: Represents an item in an invoice
 * @group Payment
 */
export const InvoiceItemSchema = z.object({
  id: z.string().cuid(),
  invoiceId: z.string(),
  description: z.string(),
  quantity: z.number().int(),
  unitPrice: z.instanceof(Prisma.Decimal, { message: "Field 'unitPrice' must be a Decimal. Location: ['Models', 'InvoiceItem']"}),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'InvoiceItem']"}),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type InvoiceItem = z.infer<typeof InvoiceItemSchema>

export default InvoiceItemSchema;
