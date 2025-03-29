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
import { BookingUpdateOneRequiredWithoutPaymentActionsNestedInputSchema } from './BookingUpdateOneRequiredWithoutPaymentActionsNestedInputSchema';
import { MerchantUpdateOneRequiredWithoutPaymentActionsNestedInputSchema } from './MerchantUpdateOneRequiredWithoutPaymentActionsNestedInputSchema';
import { RefundLogUpdateManyWithoutPaymentTransactionNestedInputSchema } from './RefundLogUpdateManyWithoutPaymentTransactionNestedInputSchema';
import { InvoicePaymentUpdateManyWithoutPaymentNestedInputSchema } from './InvoicePaymentUpdateManyWithoutPaymentNestedInputSchema';

export const PaymentActionsUpdateWithoutRefundRequestInputSchema: z.ZodType<Prisma.PaymentActionsUpdateWithoutRefundRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerPaymentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PaymentStatusSchema),z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  refundedAmount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  paymentMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  booking: z.lazy(() => BookingUpdateOneRequiredWithoutPaymentActionsNestedInputSchema).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutPaymentActionsNestedInputSchema).optional(),
  RefundLog: z.lazy(() => RefundLogUpdateManyWithoutPaymentTransactionNestedInputSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentUpdateManyWithoutPaymentNestedInputSchema).optional()
}).strict();

export default PaymentActionsUpdateWithoutRefundRequestInputSchema;
