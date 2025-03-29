import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumWaitlistStatusFilterSchema } from './EnumWaitlistStatusFilterSchema';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WaitlistEntryScalarWhereInputSchema: z.ZodType<Prisma.WaitlistEntryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WaitlistEntryScalarWhereInputSchema),z.lazy(() => WaitlistEntryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WaitlistEntryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WaitlistEntryScalarWhereInputSchema),z.lazy(() => WaitlistEntryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  desiredStartTime: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  desiredEndTime: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumWaitlistStatusFilterSchema),z.lazy(() => WaitlistStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notifiedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  promotedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WaitlistEntryScalarWhereInputSchema;
