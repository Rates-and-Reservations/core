import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateWhereInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereInputSchema'
import { ResourceTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ResourceTemplateOrderByWithRelationInputSchema'
import { ResourceTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereUniqueInputSchema'

export const ResourceTemplateAggregateArgsSchema: z.ZodType<Prisma.ResourceTemplateAggregateArgs> = z.object({
  where: ResourceTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ResourceTemplateOrderByWithRelationInputSchema.array(),ResourceTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: ResourceTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceTemplateAggregateArgsSchema;
