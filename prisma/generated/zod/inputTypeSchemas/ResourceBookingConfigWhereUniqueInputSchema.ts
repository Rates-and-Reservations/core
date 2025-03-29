import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereInputSchema } from './ResourceBookingConfigWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ResourceScalarRelationFilterSchema } from './ResourceScalarRelationFilterSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { CancellationPolicyNullableScalarRelationFilterSchema } from './CancellationPolicyNullableScalarRelationFilterSchema';
import { CancellationPolicyWhereInputSchema } from './CancellationPolicyWhereInputSchema';

export const ResourceBookingConfigWhereUniqueInputSchema: z.ZodType<Prisma.ResourceBookingConfigWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ResourceBookingConfigWhereInputSchema),z.lazy(() => ResourceBookingConfigWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceBookingConfigWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceBookingConfigWhereInputSchema),z.lazy(() => ResourceBookingConfigWhereInputSchema).array() ]).optional(),
  resourceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  minDuration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  maxDuration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  bufferTime: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  availableDays: z.lazy(() => JsonNullableFilterSchema).optional(),
  blackoutDates: z.lazy(() => JsonNullableFilterSchema).optional(),
  allowMultipleBookings: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  enableWaitlist: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  cancellationPolicyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  resource: z.union([ z.lazy(() => ResourceScalarRelationFilterSchema),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  cancellationPolicy: z.union([ z.lazy(() => CancellationPolicyNullableScalarRelationFilterSchema),z.lazy(() => CancellationPolicyWhereInputSchema) ]).optional().nullable(),
}).strict());

export default ResourceBookingConfigWhereUniqueInputSchema;
