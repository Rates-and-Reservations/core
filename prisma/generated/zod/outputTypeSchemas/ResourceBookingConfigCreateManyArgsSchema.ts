import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigCreateManyInputSchema } from '../inputTypeSchemas/ResourceBookingConfigCreateManyInputSchema'

export const ResourceBookingConfigCreateManyArgsSchema: z.ZodType<Prisma.ResourceBookingConfigCreateManyArgs> = z.object({
  data: z.union([ ResourceBookingConfigCreateManyInputSchema,ResourceBookingConfigCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceBookingConfigCreateManyArgsSchema;
