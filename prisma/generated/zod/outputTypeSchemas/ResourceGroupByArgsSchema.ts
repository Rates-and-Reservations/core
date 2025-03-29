import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputSchema } from '../inputTypeSchemas/ResourceWhereInputSchema'
import { ResourceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ResourceOrderByWithAggregationInputSchema'
import { ResourceScalarFieldEnumSchema } from '../inputTypeSchemas/ResourceScalarFieldEnumSchema'
import { ResourceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ResourceScalarWhereWithAggregatesInputSchema'

export const ResourceGroupByArgsSchema: z.ZodType<Prisma.ResourceGroupByArgs> = z.object({
  where: ResourceWhereInputSchema.optional(),
  orderBy: z.union([ ResourceOrderByWithAggregationInputSchema.array(),ResourceOrderByWithAggregationInputSchema ]).optional(),
  by: ResourceScalarFieldEnumSchema.array(),
  having: ResourceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceGroupByArgsSchema;
