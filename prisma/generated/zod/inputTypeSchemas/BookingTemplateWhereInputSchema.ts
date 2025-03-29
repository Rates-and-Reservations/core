import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumSelectionModeFilterSchema } from './EnumSelectionModeFilterSchema';
import { SelectionModeSchema } from './SelectionModeSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { BookingActionListRelationFilterSchema } from './BookingActionListRelationFilterSchema';
import { BookingRequestListRelationFilterSchema } from './BookingRequestListRelationFilterSchema';

export const BookingTemplateWhereInputSchema: z.ZodType<Prisma.BookingTemplateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingTemplateWhereInputSchema),z.lazy(() => BookingTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingTemplateWhereInputSchema),z.lazy(() => BookingTemplateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  selectionMode: z.union([ z.lazy(() => EnumSelectionModeFilterSchema),z.lazy(() => SelectionModeSchema) ]).optional(),
  config: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  actions: z.lazy(() => BookingActionListRelationFilterSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestListRelationFilterSchema).optional()
}).strict();

export default BookingTemplateWhereInputSchema;
