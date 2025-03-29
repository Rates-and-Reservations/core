import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigIncludeSchema } from '../inputTypeSchemas/ResourceBookingConfigIncludeSchema'
import { ResourceBookingConfigWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceBookingConfigWhereUniqueInputSchema'
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { CancellationPolicyArgsSchema } from "../outputTypeSchemas/CancellationPolicyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const ResourceBookingConfigFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ResourceBookingConfigFindUniqueOrThrowArgs> = z.object({
  select: ResourceBookingConfigSelectSchema.optional(),
  include: z.lazy(() => ResourceBookingConfigIncludeSchema).optional(),
  where: ResourceBookingConfigWhereUniqueInputSchema,
}).strict() ;

export default ResourceBookingConfigFindUniqueOrThrowArgsSchema;
