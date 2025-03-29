import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const UiTemplateScalarWhereInputSchema: z.ZodType<Prisma.UiTemplateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UiTemplateScalarWhereInputSchema),z.lazy(() => UiTemplateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UiTemplateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UiTemplateScalarWhereInputSchema),z.lazy(() => UiTemplateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  previewImageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isSystem: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  config: z.lazy(() => JsonFilterSchema).optional(),
  uiTheme: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default UiTemplateScalarWhereInputSchema;
