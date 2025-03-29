import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigSelectSchema } from '../inputTypeSchemas/ResourceBookingConfigSelectSchema';
import { ResourceBookingConfigIncludeSchema } from '../inputTypeSchemas/ResourceBookingConfigIncludeSchema';

export const ResourceBookingConfigArgsSchema: z.ZodType<Prisma.ResourceBookingConfigDefaultArgs> = z.object({
  select: z.lazy(() => ResourceBookingConfigSelectSchema).optional(),
  include: z.lazy(() => ResourceBookingConfigIncludeSchema).optional(),
}).strict();

export default ResourceBookingConfigArgsSchema;
