import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { InvoiceStatusSchema } from './InvoiceStatusSchema';
import { MerchantCreateNestedOneWithoutInvoiceInputSchema } from './MerchantCreateNestedOneWithoutInvoiceInputSchema';
import { BookingCreateNestedOneWithoutInvoiceInputSchema } from './BookingCreateNestedOneWithoutInvoiceInputSchema';
import { InvoicePaymentCreateNestedManyWithoutInvoiceInputSchema } from './InvoicePaymentCreateNestedManyWithoutInvoiceInputSchema';

export const InvoiceCreateWithoutCustomerInputSchema: z.ZodType<Prisma.InvoiceCreateWithoutCustomerInput> = z.object({
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
  booking: z.lazy(() => BookingCreateNestedOneWithoutInvoiceInputSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentCreateNestedManyWithoutInvoiceInputSchema).optional()
}).strict();

export default InvoiceCreateWithoutCustomerInputSchema;
