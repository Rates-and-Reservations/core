import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingActionScalarRelationFilterSchema } from './BookingActionScalarRelationFilterSchema';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';
import { BookingRequestScalarRelationFilterSchema } from './BookingRequestScalarRelationFilterSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestActionValueWhereInputSchema: z.ZodType<Prisma.BookingRequestActionValueWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingRequestActionValueWhereInputSchema),z.lazy(() => BookingRequestActionValueWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestActionValueWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestActionValueWhereInputSchema),z.lazy(() => BookingRequestActionValueWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingActionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.lazy(() => JsonFilterSchema).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingAction: z.union([ z.lazy(() => BookingActionScalarRelationFilterSchema),z.lazy(() => BookingActionWhereInputSchema) ]).optional(),
  bookingRequest: z.union([ z.lazy(() => BookingRequestScalarRelationFilterSchema),z.lazy(() => BookingRequestWhereInputSchema) ]).optional(),
}).strict();

export default BookingRequestActionValueWhereInputSchema;
