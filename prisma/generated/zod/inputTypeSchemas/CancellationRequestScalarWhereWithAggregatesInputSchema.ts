import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumCancellationSourceWithAggregatesFilterSchema } from './EnumCancellationSourceWithAggregatesFilterSchema';
import { CancellationSourceSchema } from './CancellationSourceSchema';
import { EnumCancellationStatusWithAggregatesFilterSchema } from './EnumCancellationStatusWithAggregatesFilterSchema';
import { CancellationStatusSchema } from './CancellationStatusSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DecimalNullableWithAggregatesFilterSchema } from './DecimalNullableWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CancellationRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CancellationRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CancellationRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => CancellationRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CancellationRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CancellationRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => CancellationRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingItemId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  requestedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reason: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  source: z.union([ z.lazy(() => EnumCancellationSourceWithAggregatesFilterSchema),z.lazy(() => CancellationSourceSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCancellationStatusWithAggregatesFilterSchema),z.lazy(() => CancellationStatusSchema) ]).optional(),
  processedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  approvedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  declinedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  refundAmount: z.union([ z.lazy(() => DecimalNullableWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CancellationRequestScalarWhereWithAggregatesInputSchema;
