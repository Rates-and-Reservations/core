import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigUpdateManyMutationInputSchema } from '../inputTypeSchemas/ResourceBookingConfigUpdateManyMutationInputSchema'
import { ResourceBookingConfigUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ResourceBookingConfigUncheckedUpdateManyInputSchema'
import { ResourceBookingConfigWhereInputSchema } from '../inputTypeSchemas/ResourceBookingConfigWhereInputSchema'

export const ResourceBookingConfigUpdateManyArgsSchema: z.ZodType<Prisma.ResourceBookingConfigUpdateManyArgs> = z.object({
  data: z.union([ ResourceBookingConfigUpdateManyMutationInputSchema,ResourceBookingConfigUncheckedUpdateManyInputSchema ]),
  where: ResourceBookingConfigWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceBookingConfigUpdateManyArgsSchema;
