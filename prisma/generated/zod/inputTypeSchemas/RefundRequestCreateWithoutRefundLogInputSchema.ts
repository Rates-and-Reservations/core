import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { MerchantCreateNestedOneWithoutRefundRequestInputSchema } from './MerchantCreateNestedOneWithoutRefundRequestInputSchema';
import { BookingCreateNestedOneWithoutRefundRequestInputSchema } from './BookingCreateNestedOneWithoutRefundRequestInputSchema';
import { PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema } from './PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema';

export const RefundRequestCreateWithoutRefundLogInputSchema: z.ZodType<Prisma.RefundRequestCreateWithoutRefundLogInput> = z.object({
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
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutRefundRequestInputSchema),
  booking: z.lazy(() => BookingCreateNestedOneWithoutRefundRequestInputSchema),
  paymentTransaction: z.lazy(() => PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema)
}).strict();

export default RefundRequestCreateWithoutRefundLogInputSchema;
