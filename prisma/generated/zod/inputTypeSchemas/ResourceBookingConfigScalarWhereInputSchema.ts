import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ResourceBookingConfigScalarWhereInputSchema: z.ZodType<Prisma.ResourceBookingConfigScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceBookingConfigScalarWhereInputSchema),z.lazy(() => ResourceBookingConfigScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceBookingConfigScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceBookingConfigScalarWhereInputSchema),z.lazy(() => ResourceBookingConfigScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  minDuration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  maxDuration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bufferTime: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  availableDays: z.lazy(() => JsonNullableFilterSchema).optional(),
  blackoutDates: z.lazy(() => JsonNullableFilterSchema).optional(),
  allowMultipleBookings: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  enableWaitlist: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  cancellationPolicyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ResourceBookingConfigScalarWhereInputSchema;
