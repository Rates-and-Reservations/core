import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BookingRequestFlowScalarWhereInputSchema: z.ZodType<Prisma.BookingRequestFlowScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingRequestFlowScalarWhereInputSchema),z.lazy(() => BookingRequestFlowScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestFlowScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestFlowScalarWhereInputSchema),z.lazy(() => BookingRequestFlowScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uiTemplateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  usageLimit: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  usageCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  webhookUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  webhookEvents: z.lazy(() => JsonNullableFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingRequestFlowScalarWhereInputSchema;
