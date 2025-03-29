import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { EnumRefundStatusFilterSchema } from './EnumRefundStatusFilterSchema';
import { RefundStatusSchema } from './RefundStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RefundLogScalarWhereInputSchema: z.ZodType<Prisma.RefundLogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RefundLogScalarWhereInputSchema),z.lazy(() => RefundLogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RefundLogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RefundLogScalarWhereInputSchema),z.lazy(() => RefundLogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refundRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentTransactionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerRefundId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRefundStatusFilterSchema),z.lazy(() => RefundStatusSchema) ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  processedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RefundLogScalarWhereInputSchema;
