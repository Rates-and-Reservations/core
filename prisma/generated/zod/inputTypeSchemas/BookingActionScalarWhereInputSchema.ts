import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumActionTypeFilterSchema } from './EnumActionTypeFilterSchema';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BookingActionScalarWhereInputSchema: z.ZodType<Prisma.BookingActionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingActionScalarWhereInputSchema),z.lazy(() => BookingActionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingActionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingActionScalarWhereInputSchema),z.lazy(() => BookingActionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingTemplateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumActionTypeFilterSchema),z.lazy(() => ActionTypeSchema) ]).optional(),
  config: z.lazy(() => JsonFilterSchema).optional(),
  required: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingActionScalarWhereInputSchema;
