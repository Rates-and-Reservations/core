import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigWhereInputSchema } from '../inputTypeSchemas/ResourceBookingConfigWhereInputSchema'

export const ResourceBookingConfigDeleteManyArgsSchema: z.ZodType<Prisma.ResourceBookingConfigDeleteManyArgs> = z.object({
  where: ResourceBookingConfigWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceBookingConfigDeleteManyArgsSchema;
