import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantNullableScalarRelationFilterSchema } from './MerchantNullableScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { BookingRequestFlowListRelationFilterSchema } from './BookingRequestFlowListRelationFilterSchema';

export const UiTemplateWhereInputSchema: z.ZodType<Prisma.UiTemplateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UiTemplateWhereInputSchema),z.lazy(() => UiTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UiTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UiTemplateWhereInputSchema),z.lazy(() => UiTemplateWhereInputSchema).array() ]).optional(),
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
  merchant: z.union([ z.lazy(() => MerchantNullableScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional().nullable(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowListRelationFilterSchema).optional()
}).strict();

export default UiTemplateWhereInputSchema;
