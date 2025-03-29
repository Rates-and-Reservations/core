import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetWhereInputSchema } from '../inputTypeSchemas/ResourceAssetWhereInputSchema'
import { ResourceAssetOrderByWithRelationInputSchema } from '../inputTypeSchemas/ResourceAssetOrderByWithRelationInputSchema'
import { ResourceAssetWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceAssetWhereUniqueInputSchema'

export const ResourceAssetAggregateArgsSchema: z.ZodType<Prisma.ResourceAssetAggregateArgs> = z.object({
  where: ResourceAssetWhereInputSchema.optional(),
  orderBy: z.union([ ResourceAssetOrderByWithRelationInputSchema.array(),ResourceAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: ResourceAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceAssetAggregateArgsSchema;
