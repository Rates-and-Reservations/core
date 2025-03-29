import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateWhereInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereInputSchema'
import { ResourceTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ResourceTemplateOrderByWithAggregationInputSchema'
import { ResourceTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/ResourceTemplateScalarFieldEnumSchema'
import { ResourceTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ResourceTemplateScalarWhereWithAggregatesInputSchema'

export const ResourceTemplateGroupByArgsSchema: z.ZodType<Prisma.ResourceTemplateGroupByArgs> = z.object({
  where: ResourceTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ResourceTemplateOrderByWithAggregationInputSchema.array(),ResourceTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: ResourceTemplateScalarFieldEnumSchema.array(),
  having: ResourceTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceTemplateGroupByArgsSchema;
