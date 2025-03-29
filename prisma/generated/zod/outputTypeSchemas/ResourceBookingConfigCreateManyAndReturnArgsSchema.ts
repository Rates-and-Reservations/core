import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigCreateManyInputSchema } from '../inputTypeSchemas/ResourceBookingConfigCreateManyInputSchema'

export const ResourceBookingConfigCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ResourceBookingConfigCreateManyAndReturnArgs> = z.object({
  data: z.union([ ResourceBookingConfigCreateManyInputSchema,ResourceBookingConfigCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceBookingConfigCreateManyAndReturnArgsSchema;
