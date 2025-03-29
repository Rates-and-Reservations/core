import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { BookingCreateNestedOneWithoutPaymentActionsInputSchema } from './BookingCreateNestedOneWithoutPaymentActionsInputSchema';
import { MerchantCreateNestedOneWithoutPaymentActionsInputSchema } from './MerchantCreateNestedOneWithoutPaymentActionsInputSchema';
import { RefundLogCreateNestedManyWithoutPaymentTransactionInputSchema } from './RefundLogCreateNestedManyWithoutPaymentTransactionInputSchema';
import { InvoicePaymentCreateNestedManyWithoutPaymentInputSchema } from './InvoicePaymentCreateNestedManyWithoutPaymentInputSchema';

export const PaymentActionsCreateWithoutRefundRequestInputSchema: z.ZodType<Prisma.PaymentActionsCreateWithoutRefundRequestInput> = z.object({
  id: z.string().cuid().optional(),
  provider: z.string(),
  providerPaymentId: z.string(),
  amount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  status: z.lazy(() => PaymentStatusSchema).optional(),
  refundedAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional(),
  paymentMethod: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutPaymentActionsInputSchema),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutPaymentActionsInputSchema),
  RefundLog: z.lazy(() => RefundLogCreateNestedManyWithoutPaymentTransactionInputSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentCreateNestedManyWithoutPaymentInputSchema).optional()
}).strict();

export default PaymentActionsCreateWithoutRefundRequestInputSchema;
