import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { RefundRequestUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema';

export const PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.PaymentActionsUncheckedCreateWithoutInvoicePaymentInput> = z.object({
  id: z.string().cuid().optional(),
  bookingId: z.string(),
  merchantId: z.string(),
  provider: z.string(),
  providerPaymentId: z.string(),
  amount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  status: z.lazy(() => PaymentStatusSchema).optional(),
  refundedAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional(),
  paymentMethod: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RefundRequest: z.lazy(() => RefundRequestUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema).optional(),
  RefundLog: z.lazy(() => RefundLogUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema).optional()
}).strict();

export default PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema;
