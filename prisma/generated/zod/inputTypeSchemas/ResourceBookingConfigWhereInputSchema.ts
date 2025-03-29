import type { Prisma } from '@prisma/client';

import { z } from 'zod';
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

export const ResourceBookingConfigWhereInputSchema: z.ZodType<Prisma.ResourceBookingConfigWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResourceBookingConfigWhereInputSchema),z.lazy(() => ResourceBookingConfigWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResourceBookingConfigWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResourceBookingConfigWhereInputSchema),z.lazy(() => ResourceBookingConfigWhereInputSchema).array() ]).optional(),
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
  resource: z.union([ z.lazy(() => ResourceScalarRelationFilterSchema),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  cancellationPolicy: z.union([ z.lazy(() => CancellationPolicyNullableScalarRelationFilterSchema),z.lazy(() => CancellationPolicyWhereInputSchema) ]).optional().nullable(),
}).strict();

export default ResourceBookingConfigWhereInputSchema;
