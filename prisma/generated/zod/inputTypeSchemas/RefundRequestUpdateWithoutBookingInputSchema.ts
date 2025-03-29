import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { EnumRefundRequestStatusFieldUpdateOperationsInputSchema } from './EnumRefundRequestStatusFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutRefundRequestNestedInputSchema } from './MerchantUpdateOneRequiredWithoutRefundRequestNestedInputSchema';
import { PaymentActionsUpdateOneRequiredWithoutRefundRequestNestedInputSchema } from './PaymentActionsUpdateOneRequiredWithoutRefundRequestNestedInputSchema';
import { RefundLogUpdateManyWithoutRefundRequestNestedInputSchema } from './RefundLogUpdateManyWithoutRefundRequestNestedInputSchema';

export const RefundRequestUpdateWithoutBookingInputSchema: z.ZodType<Prisma.RefundRequestUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => RefundRequestStatusSchema),z.lazy(() => EnumRefundRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  approvedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approvedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rejectedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requestedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requestedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  processedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutRefundRequestNestedInputSchema).optional(),
  paymentTransaction: z.lazy(() => PaymentActionsUpdateOneRequiredWithoutRefundRequestNestedInputSchema).optional(),
  RefundLog: z.lazy(() => RefundLogUpdateManyWithoutRefundRequestNestedInputSchema).optional()
}).strict();

export default RefundRequestUpdateWithoutBookingInputSchema;
