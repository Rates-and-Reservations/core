import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumRefundTypeFilterSchema } from './EnumRefundTypeFilterSchema';
import { RefundTypeSchema } from './RefundTypeSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumCancellationScopeFilterSchema } from './EnumCancellationScopeFilterSchema';
import { CancellationScopeSchema } from './CancellationScopeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CancellationPolicyScalarWhereInputSchema: z.ZodType<Prisma.CancellationPolicyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CancellationPolicyScalarWhereInputSchema),z.lazy(() => CancellationPolicyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CancellationPolicyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CancellationPolicyScalarWhereInputSchema),z.lazy(() => CancellationPolicyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refundType: z.union([ z.lazy(() => EnumRefundTypeFilterSchema),z.lazy(() => RefundTypeSchema) ]).optional(),
  refundAmount: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  timeLimitHours: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  appliesTo: z.union([ z.lazy(() => EnumCancellationScopeFilterSchema),z.lazy(() => CancellationScopeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CancellationPolicyScalarWhereInputSchema;
