import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ResourceBookingConfigScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ResourceBookingConfigScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceBookingConfigScalarWhereWithAggregatesInputSchema),z.lazy(() => ResourceBookingConfigScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceBookingConfigScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceBookingConfigScalarWhereWithAggregatesInputSchema),z.lazy(() => ResourceBookingConfigScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  minDuration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  maxDuration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bufferTime: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  availableDays: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  blackoutDates: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  allowMultipleBookings: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  enableWaitlist: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  cancellationPolicyId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ResourceBookingConfigScalarWhereWithAggregatesInputSchema;
