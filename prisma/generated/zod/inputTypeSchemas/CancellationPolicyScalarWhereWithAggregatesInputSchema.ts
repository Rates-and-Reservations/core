import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumRefundTypeWithAggregatesFilterSchema } from './EnumRefundTypeWithAggregatesFilterSchema';
import { RefundTypeSchema } from './RefundTypeSchema';
import { DecimalNullableWithAggregatesFilterSchema } from './DecimalNullableWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { EnumCancellationScopeWithAggregatesFilterSchema } from './EnumCancellationScopeWithAggregatesFilterSchema';
import { CancellationScopeSchema } from './CancellationScopeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CancellationPolicyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CancellationPolicyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CancellationPolicyScalarWhereWithAggregatesInputSchema),z.lazy(() => CancellationPolicyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CancellationPolicyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CancellationPolicyScalarWhereWithAggregatesInputSchema),z.lazy(() => CancellationPolicyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  refundType: z.union([ z.lazy(() => EnumRefundTypeWithAggregatesFilterSchema),z.lazy(() => RefundTypeSchema) ]).optional(),
  refundAmount: z.union([ z.lazy(() => DecimalNullableWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  timeLimitHours: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  appliesTo: z.union([ z.lazy(() => EnumCancellationScopeWithAggregatesFilterSchema),z.lazy(() => CancellationScopeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CancellationPolicyScalarWhereWithAggregatesInputSchema;
