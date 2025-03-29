import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereInputSchema } from './ResourceBookingConfigWhereInputSchema';

export const ResourceBookingConfigListRelationFilterSchema: z.ZodType<Prisma.ResourceBookingConfigListRelationFilter> = z.object({
  every: z.lazy(() => ResourceBookingConfigWhereInputSchema).optional(),
  some: z.lazy(() => ResourceBookingConfigWhereInputSchema).optional(),
  none: z.lazy(() => ResourceBookingConfigWhereInputSchema).optional()
}).strict();

export default ResourceBookingConfigListRelationFilterSchema;
