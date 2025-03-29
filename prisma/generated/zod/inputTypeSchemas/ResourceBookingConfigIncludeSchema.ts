import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { CancellationPolicyArgsSchema } from "../outputTypeSchemas/CancellationPolicyArgsSchema"

export const ResourceBookingConfigIncludeSchema: z.ZodType<Prisma.ResourceBookingConfigInclude> = z.object({
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  cancellationPolicy: z.union([z.boolean(),z.lazy(() => CancellationPolicyArgsSchema)]).optional(),
}).strict()

export default ResourceBookingConfigIncludeSchema;
