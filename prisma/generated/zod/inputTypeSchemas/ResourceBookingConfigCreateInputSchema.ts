import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceCreateNestedOneWithoutResourceBookingConfigInputSchema } from './ResourceCreateNestedOneWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyCreateNestedOneWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateNestedOneWithoutResourceBookingConfigInputSchema';

export const ResourceBookingConfigCreateInputSchema: z.ZodType<Prisma.ResourceBookingConfigCreateInput> = z.object({
  id: z.string().cuid().optional(),
  minDuration: z.number().int(),
  maxDuration: z.number().int(),
  bufferTime: z.number().int(),
  availableDays: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  blackoutDates: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allowMultipleBookings: z.boolean().optional(),
  enableWaitlist: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutResourceBookingConfigInputSchema),
  cancellationPolicy: z.lazy(() => CancellationPolicyCreateNestedOneWithoutResourceBookingConfigInputSchema).optional()
}).strict();

export default ResourceBookingConfigCreateInputSchema;
