import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RefundStatusSchema } from './RefundStatusSchema';

export const RefundLogCreateManyInputSchema: z.ZodType<Prisma.RefundLogCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  refundRequestId: z.string(),
  paymentTransactionId: z.string(),
  amount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  currency: z.string(),
  provider: z.string(),
  providerRefundId: z.string(),
  status: z.lazy(() => RefundStatusSchema).optional(),
  errorMessage: z.string().optional().nullable(),
  processedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RefundLogCreateManyInputSchema;
