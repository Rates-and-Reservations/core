import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { CancellationPolicyArgsSchema } from "../outputTypeSchemas/CancellationPolicyArgsSchema"

export const ResourceBookingConfigSelectSchema: z.ZodType<Prisma.ResourceBookingConfigSelect> = z.object({
  id: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  minDuration: z.boolean().optional(),
  maxDuration: z.boolean().optional(),
  bufferTime: z.boolean().optional(),
  availableDays: z.boolean().optional(),
  blackoutDates: z.boolean().optional(),
  allowMultipleBookings: z.boolean().optional(),
  enableWaitlist: z.boolean().optional(),
  cancellationPolicyId: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  cancellationPolicy: z.union([z.boolean(),z.lazy(() => CancellationPolicyArgsSchema)]).optional(),
}).strict()

export default ResourceBookingConfigSelectSchema;
