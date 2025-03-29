import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { EnumPaymentStatusFilterSchema } from './EnumPaymentStatusFilterSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingScalarRelationFilterSchema } from './BookingScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { RefundRequestListRelationFilterSchema } from './RefundRequestListRelationFilterSchema';
import { RefundLogListRelationFilterSchema } from './RefundLogListRelationFilterSchema';
import { InvoicePaymentListRelationFilterSchema } from './InvoicePaymentListRelationFilterSchema';

export const PaymentActionsWhereInputSchema: z.ZodType<Prisma.PaymentActionsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentActionsWhereInputSchema),z.lazy(() => PaymentActionsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentActionsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentActionsWhereInputSchema),z.lazy(() => PaymentActionsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerPaymentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPaymentStatusFilterSchema),z.lazy(() => PaymentStatusSchema) ]).optional(),
  refundedAmount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  booking: z.union([ z.lazy(() => BookingScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  RefundRequest: z.lazy(() => RefundRequestListRelationFilterSchema).optional(),
  RefundLog: z.lazy(() => RefundLogListRelationFilterSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentListRelationFilterSchema).optional()
}).strict();

export default PaymentActionsWhereInputSchema;
