import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetWhereInputSchema } from '../inputTypeSchemas/ResourceAssetWhereInputSchema'
import { ResourceAssetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ResourceAssetOrderByWithAggregationInputSchema'
import { ResourceAssetScalarFieldEnumSchema } from '../inputTypeSchemas/ResourceAssetScalarFieldEnumSchema'
import { ResourceAssetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ResourceAssetScalarWhereWithAggregatesInputSchema'

export const ResourceAssetGroupByArgsSchema: z.ZodType<Prisma.ResourceAssetGroupByArgs> = z.object({
  where: ResourceAssetWhereInputSchema.optional(),
  orderBy: z.union([ ResourceAssetOrderByWithAggregationInputSchema.array(),ResourceAssetOrderByWithAggregationInputSchema ]).optional(),
  by: ResourceAssetScalarFieldEnumSchema.array(),
  having: ResourceAssetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ResourceAssetGroupByArgsSchema;
