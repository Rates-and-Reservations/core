import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { EnumInvoiceStatusFilterSchema } from './EnumInvoiceStatusFilterSchema';
import { InvoiceStatusSchema } from './InvoiceStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { BookingNullableScalarRelationFilterSchema } from './BookingNullableScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { CustomerNullableScalarRelationFilterSchema } from './CustomerNullableScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { InvoicePaymentListRelationFilterSchema } from './InvoicePaymentListRelationFilterSchema';

export const InvoiceWhereInputSchema: z.ZodType<Prisma.InvoiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InvoiceWhereInputSchema),z.lazy(() => InvoiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvoiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvoiceWhereInputSchema),z.lazy(() => InvoiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  invoiceNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subtotal: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  taxAmount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  discountAmount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  totalAmount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  status: z.union([ z.lazy(() => EnumInvoiceStatusFilterSchema),z.lazy(() => InvoiceStatusSchema) ]).optional(),
  issueDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dueDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pdfUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingNullableScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional().nullable(),
  customer: z.union([ z.lazy(() => CustomerNullableScalarRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional().nullable(),
  InvoicePayment: z.lazy(() => InvoicePaymentListRelationFilterSchema).optional()
}).strict();

export default InvoiceWhereInputSchema;
