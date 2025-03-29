import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { EnumPaymentStatusFieldUpdateOperationsInputSchema } from './EnumPaymentStatusFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RefundRequestUncheckedUpdateManyWithoutPaymentTransactionNestedInputSchema } from './RefundRequestUncheckedUpdateManyWithoutPaymentTransactionNestedInputSchema';
import { RefundLogUncheckedUpdateManyWithoutPaymentTransactionNestedInputSchema } from './RefundLogUncheckedUpdateManyWithoutPaymentTransactionNestedInputSchema';
import { InvoicePaymentUncheckedUpdateManyWithoutPaymentNestedInputSchema } from './InvoicePaymentUncheckedUpdateManyWithoutPaymentNestedInputSchema';

export const PaymentActionsUncheckedUpdateWithoutBookingInputSchema: z.ZodType<Prisma.PaymentActionsUncheckedUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  merchantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerPaymentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PaymentStatusSchema),z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  refundedAmount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  RefundRequest: z.lazy(() => RefundRequestUncheckedUpdateManyWithoutPaymentTransactionNestedInputSchema).optional(),
  RefundLog: z.lazy(() => RefundLogUncheckedUpdateManyWithoutPaymentTransactionNestedInputSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentUncheckedUpdateManyWithoutPaymentNestedInputSchema).optional()
}).strict();

export default PaymentActionsUncheckedUpdateWithoutBookingInputSchema;
