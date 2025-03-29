import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const ResourceBookingConfigUncheckedCreateInputSchema: z.ZodType<Prisma.ResourceBookingConfigUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  resourceId: z.string(),
  minDuration: z.number().int(),
  maxDuration: z.number().int(),
  bufferTime: z.number().int(),
  availableDays: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  blackoutDates: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allowMultipleBookings: z.boolean().optional(),
  enableWaitlist: z.boolean().optional(),
  cancellationPolicyId: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ResourceBookingConfigUncheckedCreateInputSchema;
