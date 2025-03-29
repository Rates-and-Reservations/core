import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RefundStatusSchema } from './RefundStatusSchema';
import { RefundRequestCreateNestedOneWithoutRefundLogInputSchema } from './RefundRequestCreateNestedOneWithoutRefundLogInputSchema';

export const RefundLogCreateWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundLogCreateWithoutPaymentTransactionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  provider: z.string(),
  providerRefundId: z.string(),
  status: z.lazy(() => RefundStatusSchema).optional(),
  errorMessage: z.string().optional().nullable(),
  processedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  refundRequest: z.lazy(() => RefundRequestCreateNestedOneWithoutRefundLogInputSchema)
}).strict();

export default RefundLogCreateWithoutPaymentTransactionInputSchema;
