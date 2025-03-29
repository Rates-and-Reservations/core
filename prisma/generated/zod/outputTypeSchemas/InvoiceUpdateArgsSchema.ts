import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceIncludeSchema } from '../inputTypeSchemas/InvoiceIncludeSchema'
import { InvoiceUpdateInputSchema } from '../inputTypeSchemas/InvoiceUpdateInputSchema'
import { InvoiceUncheckedUpdateInputSchema } from '../inputTypeSchemas/InvoiceUncheckedUpdateInputSchema'
import { InvoiceWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { InvoicePaymentFindManyArgsSchema } from "../outputTypeSchemas/InvoicePaymentFindManyArgsSchema"
import { InvoiceCountOutputTypeArgsSchema } from "../outputTypeSchemas/InvoiceCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceSelectSchema: z.ZodType<Prisma.InvoiceSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  invoiceNumber: z.boolean().optional(),
  currency: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  taxAmount: z.boolean().optional(),
  discountAmount: z.boolean().optional(),
  totalAmount: z.boolean().optional(),
  status: z.boolean().optional(),
  issueDate: z.boolean().optional(),
  dueDate: z.boolean().optional(),
  paidAt: z.boolean().optional(),
  notes: z.boolean().optional(),
  pdfUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  InvoicePayment: z.union([z.boolean(),z.lazy(() => InvoicePaymentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InvoiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const InvoiceUpdateArgsSchema: z.ZodType<Prisma.InvoiceUpdateArgs> = z.object({
  select: InvoiceSelectSchema.optional(),
  include: z.lazy(() => InvoiceIncludeSchema).optional(),
  data: z.union([ InvoiceUpdateInputSchema,InvoiceUncheckedUpdateInputSchema ]),
  where: InvoiceWhereUniqueInputSchema,
}).strict() ;

export default InvoiceUpdateArgsSchema;
