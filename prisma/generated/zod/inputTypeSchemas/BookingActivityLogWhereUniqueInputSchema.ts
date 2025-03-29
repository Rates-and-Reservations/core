import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereInputSchema } from './BookingActivityLogWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumBookingActionTypeFilterSchema } from './EnumBookingActionTypeFilterSchema';
import { BookingActionTypeSchema } from './BookingActionTypeSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { BookingScalarRelationFilterSchema } from './BookingScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingActivityLogWhereUniqueInputSchema: z.ZodType<Prisma.BookingActivityLogWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingActivityLogWhereInputSchema),z.lazy(() => BookingActivityLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingActivityLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingActivityLogWhereInputSchema),z.lazy(() => BookingActivityLogWhereInputSchema).array() ]).optional(),
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
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
}).strict());

export default BookingActivityLogWhereUniqueInputSchema;
