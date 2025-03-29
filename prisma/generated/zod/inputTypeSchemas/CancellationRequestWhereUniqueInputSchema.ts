import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereInputSchema } from './CancellationRequestWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumCancellationSourceFilterSchema } from './EnumCancellationSourceFilterSchema';
import { CancellationSourceSchema } from './CancellationSourceSchema';
import { EnumCancellationStatusFilterSchema } from './EnumCancellationStatusFilterSchema';
import { CancellationStatusSchema } from './CancellationStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingScalarRelationFilterSchema } from './BookingScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingItemNullableScalarRelationFilterSchema } from './BookingItemNullableScalarRelationFilterSchema';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';

export const CancellationRequestWhereUniqueInputSchema: z.ZodType<Prisma.CancellationRequestWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CancellationRequestWhereInputSchema),z.lazy(() => CancellationRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CancellationRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CancellationRequestWhereInputSchema),z.lazy(() => CancellationRequestWhereInputSchema).array() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingItemId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  requestedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  source: z.union([ z.lazy(() => EnumCancellationSourceFilterSchema),z.lazy(() => CancellationSourceSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCancellationStatusFilterSchema),z.lazy(() => CancellationStatusSchema) ]).optional(),
  processedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  approvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  declinedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  refundAmount: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  booking: z.union([ z.lazy(() => BookingScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  bookingItem: z.union([ z.lazy(() => BookingItemNullableScalarRelationFilterSchema),z.lazy(() => BookingItemWhereInputSchema) ]).optional().nullable(),
}).strict());

export default CancellationRequestWhereUniqueInputSchema;
