import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumBookingActionTypeFilterSchema } from './EnumBookingActionTypeFilterSchema';
import { BookingActionTypeSchema } from './BookingActionTypeSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BookingActivityLogScalarWhereInputSchema: z.ZodType<Prisma.BookingActivityLogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingActivityLogScalarWhereInputSchema),z.lazy(() => BookingActivityLogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingActivityLogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingActivityLogScalarWhereInputSchema),z.lazy(() => BookingActivityLogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  systemAction: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  action: z.union([ z.lazy(() => EnumBookingActionTypeFilterSchema),z.lazy(() => BookingActionTypeSchema) ]).optional(),
  previousValue: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  newValue: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  performedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  performedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingActivityLogScalarWhereInputSchema;
