import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigWhereInputSchema } from '../inputTypeSchemas/ResourceBookingConfigWhereInputSchema'
import { ResourceBookingConfigOrderByWithRelationInputSchema } from '../inputTypeSchemas/ResourceBookingConfigOrderByWithRelationInputSchema'
import { ResourceBookingConfigWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceBookingConfigWhereUniqueInputSchema'

export const ResourceBookingConfigAggregateArgsSchema: z.ZodType<Prisma.ResourceBookingConfigAggregateArgs> = z.object({
  where: ResourceBookingConfigWhereInputSchema.optional(),
  orderBy: z.union([ ResourceBookingConfigOrderByWithRelationInputSchema.array(),ResourceBookingConfigOrderByWithRelationInputSchema ]).optional(),
  cursor: ResourceBookingConfigWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceBookingConfigAggregateArgsSchema;
