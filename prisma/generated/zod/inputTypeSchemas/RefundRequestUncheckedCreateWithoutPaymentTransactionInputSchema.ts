import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { RefundLogUncheckedCreateNestedManyWithoutRefundRequestInputSchema } from './RefundLogUncheckedCreateNestedManyWithoutRefundRequestInputSchema';

export const RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundRequestUncheckedCreateWithoutPaymentTransactionInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  bookingId: z.string(),
  amount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  reason: z.string().optional().nullable(),
  status: z.lazy(() => RefundRequestStatusSchema).optional(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.coerce.date().optional().nullable(),
  rejectedAt: z.coerce.date().optional().nullable(),
  requestedBy: z.string().optional().nullable(),
  requestedAt: z.coerce.date().optional(),
  processedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RefundLog: z.lazy(() => RefundLogUncheckedCreateNestedManyWithoutRefundRequestInputSchema).optional()
}).strict();

export default RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema;
