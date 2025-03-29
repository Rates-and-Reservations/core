import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereInputSchema } from './BookingRequestFlowWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BookingRequestScalarRelationFilterSchema } from './BookingRequestScalarRelationFilterSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { UiTemplateScalarRelationFilterSchema } from './UiTemplateScalarRelationFilterSchema';
import { UiTemplateWhereInputSchema } from './UiTemplateWhereInputSchema';

export const BookingRequestFlowWhereUniqueInputSchema: z.ZodType<Prisma.BookingRequestFlowWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => BookingRequestFlowWhereInputSchema),z.lazy(() => BookingRequestFlowWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestFlowWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestFlowWhereInputSchema),z.lazy(() => BookingRequestFlowWhereInputSchema).array() ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uiTemplateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  usageLimit: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  usageCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  webhookUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  webhookEvents: z.lazy(() => JsonNullableFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingRequest: z.union([ z.lazy(() => BookingRequestScalarRelationFilterSchema),z.lazy(() => BookingRequestWhereInputSchema) ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  uiTemplate: z.union([ z.lazy(() => UiTemplateScalarRelationFilterSchema),z.lazy(() => UiTemplateWhereInputSchema) ]).optional(),
}).strict());

export default BookingRequestFlowWhereUniqueInputSchema;
