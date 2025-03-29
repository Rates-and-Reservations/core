import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BookingRequestActionValueScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingRequestActionValueScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingRequestActionValueScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingRequestActionValueScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestActionValueScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestActionValueScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingRequestActionValueScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingActionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingRequestActionValueScalarWhereWithAggregatesInputSchema;
