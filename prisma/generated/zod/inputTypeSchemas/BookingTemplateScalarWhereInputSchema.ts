import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumSelectionModeFilterSchema } from './EnumSelectionModeFilterSchema';
import { SelectionModeSchema } from './SelectionModeSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BookingTemplateScalarWhereInputSchema: z.ZodType<Prisma.BookingTemplateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingTemplateScalarWhereInputSchema),z.lazy(() => BookingTemplateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingTemplateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingTemplateScalarWhereInputSchema),z.lazy(() => BookingTemplateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  selectionMode: z.union([ z.lazy(() => EnumSelectionModeFilterSchema),z.lazy(() => SelectionModeSchema) ]).optional(),
  config: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingTemplateScalarWhereInputSchema;
