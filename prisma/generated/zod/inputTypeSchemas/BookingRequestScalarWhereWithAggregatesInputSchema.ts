import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumBookingRequestStatusWithAggregatesFilterSchema } from './EnumBookingRequestStatusWithAggregatesFilterSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BookingRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  prefilledFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  customerId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  resourceId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  templateId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumBookingRequestStatusWithAggregatesFilterSchema),z.lazy(() => BookingRequestStatusSchema) ]).optional(),
  actionStatus: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  finalizedSnapshot: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingRequestScalarWhereWithAggregatesInputSchema;
