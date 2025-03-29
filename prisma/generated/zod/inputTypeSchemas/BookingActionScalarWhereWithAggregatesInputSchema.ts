import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumActionTypeWithAggregatesFilterSchema } from './EnumActionTypeWithAggregatesFilterSchema';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BookingActionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingActionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingActionScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingActionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingActionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingActionScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingActionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingTemplateId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumActionTypeWithAggregatesFilterSchema),z.lazy(() => ActionTypeSchema) ]).optional(),
  config: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  required: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingActionScalarWhereWithAggregatesInputSchema;
