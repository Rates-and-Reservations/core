import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereInputSchema } from './BookingRequestActionValueWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingActionScalarRelationFilterSchema } from './BookingActionScalarRelationFilterSchema';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';
import { BookingRequestScalarRelationFilterSchema } from './BookingRequestScalarRelationFilterSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';

export const BookingRequestActionValueWhereUniqueInputSchema: z.ZodType<Prisma.BookingRequestActionValueWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingRequestActionValueWhereInputSchema),z.lazy(() => BookingRequestActionValueWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestActionValueWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestActionValueWhereInputSchema),z.lazy(() => BookingRequestActionValueWhereInputSchema).array() ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingActionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.lazy(() => JsonFilterSchema).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingAction: z.union([ z.lazy(() => BookingActionScalarRelationFilterSchema),z.lazy(() => BookingActionWhereInputSchema) ]).optional(),
  bookingRequest: z.union([ z.lazy(() => BookingRequestScalarRelationFilterSchema),z.lazy(() => BookingRequestWhereInputSchema) ]).optional(),
}).strict());

export default BookingRequestActionValueWhereUniqueInputSchema;
