import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { InvoiceStatusSchema } from './InvoiceStatusSchema';
import { MerchantCreateNestedOneWithoutInvoiceInputSchema } from './MerchantCreateNestedOneWithoutInvoiceInputSchema';
import { CustomerCreateNestedOneWithoutInvoiceInputSchema } from './CustomerCreateNestedOneWithoutInvoiceInputSchema';
import { InvoicePaymentCreateNestedManyWithoutInvoiceInputSchema } from './InvoicePaymentCreateNestedManyWithoutInvoiceInputSchema';

export const InvoiceCreateWithoutBookingInputSchema: z.ZodType<Prisma.InvoiceCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  invoiceNumber: z.string(),
  currency: z.string(),
  subtotal: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  taxAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  discountAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  totalAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  status: z.lazy(() => InvoiceStatusSchema).optional(),
  issueDate: z.coerce.date(),
  dueDate: z.coerce.date().optional().nullable(),
  paidAt: z.coerce.date().optional().nullable(),
  notes: z.string().optional().nullable(),
  pdfUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutInvoiceInputSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutInvoiceInputSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentCreateNestedManyWithoutInvoiceInputSchema).optional()
}).strict();

export default InvoiceCreateWithoutBookingInputSchema;
