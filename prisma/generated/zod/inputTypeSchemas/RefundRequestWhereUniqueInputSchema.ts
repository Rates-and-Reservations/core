import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereInputSchema } from './RefundRequestWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumRefundRequestStatusFilterSchema } from './EnumRefundRequestStatusFilterSchema';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { BookingScalarRelationFilterSchema } from './BookingScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { PaymentActionsScalarRelationFilterSchema } from './PaymentActionsScalarRelationFilterSchema';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';
import { RefundLogListRelationFilterSchema } from './RefundLogListRelationFilterSchema';

export const RefundRequestWhereUniqueInputSchema: z.ZodType<Prisma.RefundRequestWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => RefundRequestWhereInputSchema),z.lazy(() => RefundRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RefundRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RefundRequestWhereInputSchema),z.lazy(() => RefundRequestWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentTransactionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumRefundRequestStatusFilterSchema),z.lazy(() => RefundRequestStatusSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rejectedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  requestedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  requestedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  processedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  paymentTransaction: z.union([ z.lazy(() => PaymentActionsScalarRelationFilterSchema),z.lazy(() => PaymentActionsWhereInputSchema) ]).optional(),
  RefundLog: z.lazy(() => RefundLogListRelationFilterSchema).optional()
}).strict());

export default RefundRequestWhereUniqueInputSchema;
