import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceBookingConfigWhereInputSchema } from '../inputTypeSchemas/ResourceBookingConfigWhereInputSchema'
import { ResourceBookingConfigOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ResourceBookingConfigOrderByWithAggregationInputSchema'
import { ResourceBookingConfigScalarFieldEnumSchema } from '../inputTypeSchemas/ResourceBookingConfigScalarFieldEnumSchema'
import { ResourceBookingConfigScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ResourceBookingConfigScalarWhereWithAggregatesInputSchema'

export const ResourceBookingConfigGroupByArgsSchema: z.ZodType<Prisma.ResourceBookingConfigGroupByArgs> = z.object({
  where: ResourceBookingConfigWhereInputSchema.optional(),
  orderBy: z.union([ ResourceBookingConfigOrderByWithAggregationInputSchema.array(),ResourceBookingConfigOrderByWithAggregationInputSchema ]).optional(),
  by: ResourceBookingConfigScalarFieldEnumSchema.array(),
  having: ResourceBookingConfigScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceBookingConfigGroupByArgsSchema;
