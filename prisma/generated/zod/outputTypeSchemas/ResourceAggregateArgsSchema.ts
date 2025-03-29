import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputSchema } from '../inputTypeSchemas/ResourceWhereInputSchema'
import { ResourceOrderByWithRelationInputSchema } from '../inputTypeSchemas/ResourceOrderByWithRelationInputSchema'
import { ResourceWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceWhereUniqueInputSchema'

export const ResourceAggregateArgsSchema: z.ZodType<Prisma.ResourceAggregateArgs> = z.object({
  where: ResourceWhereInputSchema.optional(),
  orderBy: z.union([ ResourceOrderByWithRelationInputSchema.array(),ResourceOrderByWithRelationInputSchema ]).optional(),
  cursor: ResourceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceAggregateArgsSchema;
