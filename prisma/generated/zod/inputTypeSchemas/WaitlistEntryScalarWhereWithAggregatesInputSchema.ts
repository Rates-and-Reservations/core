import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumWaitlistStatusWithAggregatesFilterSchema } from './EnumWaitlistStatusWithAggregatesFilterSchema';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const WaitlistEntryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WaitlistEntryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputSchema),z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputSchema),z.lazy(() => WaitlistEntryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  customerId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  desiredStartTime: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  desiredEndTime: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumWaitlistStatusWithAggregatesFilterSchema),z.lazy(() => WaitlistStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notifiedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  promotedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WaitlistEntryScalarWhereWithAggregatesInputSchema;
