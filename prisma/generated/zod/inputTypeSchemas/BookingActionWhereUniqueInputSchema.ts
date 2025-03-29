import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereInputSchema } from './BookingActionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumActionTypeFilterSchema } from './EnumActionTypeFilterSchema';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingTemplateScalarRelationFilterSchema } from './BookingTemplateScalarRelationFilterSchema';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';
import { BookingRequestActionValueListRelationFilterSchema } from './BookingRequestActionValueListRelationFilterSchema';

export const BookingActionWhereUniqueInputSchema: z.ZodType<Prisma.BookingActionWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingActionWhereInputSchema),z.lazy(() => BookingActionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingActionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingActionWhereInputSchema),z.lazy(() => BookingActionWhereInputSchema).array() ]).optional(),
  bookingTemplateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumActionTypeFilterSchema),z.lazy(() => ActionTypeSchema) ]).optional(),
  config: z.lazy(() => JsonFilterSchema).optional(),
  required: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingTemplate: z.union([ z.lazy(() => BookingTemplateScalarRelationFilterSchema),z.lazy(() => BookingTemplateWhereInputSchema) ]).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueListRelationFilterSchema).optional()
}).strict());

export default BookingActionWhereUniqueInputSchema;
