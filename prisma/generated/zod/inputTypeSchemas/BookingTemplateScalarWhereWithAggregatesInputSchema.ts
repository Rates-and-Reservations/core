import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumSelectionModeWithAggregatesFilterSchema } from './EnumSelectionModeWithAggregatesFilterSchema';
import { SelectionModeSchema } from './SelectionModeSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BookingTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingTemplateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingTemplateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  selectionMode: z.union([ z.lazy(() => EnumSelectionModeWithAggregatesFilterSchema),z.lazy(() => SelectionModeSchema) ]).optional(),
  config: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingTemplateScalarWhereWithAggregatesInputSchema;
