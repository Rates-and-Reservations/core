import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { BookingCreateNestedOneWithoutRefundRequestInputSchema } from './BookingCreateNestedOneWithoutRefundRequestInputSchema';
import { PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema } from './PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema';
import { RefundLogCreateNestedManyWithoutRefundRequestInputSchema } from './RefundLogCreateNestedManyWithoutRefundRequestInputSchema';

export const RefundRequestCreateWithoutMerchantInputSchema: z.ZodType<Prisma.RefundRequestCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
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
  booking: z.lazy(() => BookingCreateNestedOneWithoutRefundRequestInputSchema),
  paymentTransaction: z.lazy(() => PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema),
  RefundLog: z.lazy(() => RefundLogCreateNestedManyWithoutRefundRequestInputSchema).optional()
}).strict();

export default RefundRequestCreateWithoutMerchantInputSchema;
