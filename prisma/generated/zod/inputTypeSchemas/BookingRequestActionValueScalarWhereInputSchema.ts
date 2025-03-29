import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BookingRequestActionValueScalarWhereInputSchema: z.ZodType<Prisma.BookingRequestActionValueScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingRequestActionValueScalarWhereInputSchema),z.lazy(() => BookingRequestActionValueScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestActionValueScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestActionValueScalarWhereInputSchema),z.lazy(() => BookingRequestActionValueScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingActionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.lazy(() => JsonFilterSchema).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingRequestActionValueScalarWhereInputSchema;
