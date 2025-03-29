import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetIncludeSchema } from '../inputTypeSchemas/ResourceAssetIncludeSchema'
import { ResourceAssetWhereInputSchema } from '../inputTypeSchemas/ResourceAssetWhereInputSchema'
import { ResourceAssetOrderByWithRelationInputSchema } from '../inputTypeSchemas/ResourceAssetOrderByWithRelationInputSchema'
import { ResourceAssetWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceAssetWhereUniqueInputSchema'
import { ResourceAssetScalarFieldEnumSchema } from '../inputTypeSchemas/ResourceAssetScalarFieldEnumSchema'
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { MerchantAssetArgsSchema } from "../outputTypeSchemas/MerchantAssetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceAssetSelectSchema: z.ZodType<Prisma.ResourceAssetSelect> = z.object({
  id: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  assetId: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  asset: z.union([z.boolean(),z.lazy(() => MerchantAssetArgsSchema)]).optional(),
}).strict()

export const ResourceAssetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ResourceAssetFindFirstOrThrowArgs> = z.object({
  select: ResourceAssetSelectSchema.optional(),
  include: z.lazy(() => ResourceAssetIncludeSchema).optional(),
  where: ResourceAssetWhereInputSchema.optional(),
  orderBy: z.union([ ResourceAssetOrderByWithRelationInputSchema.array(),ResourceAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: ResourceAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResourceAssetScalarFieldEnumSchema,ResourceAssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ResourceAssetFindFirstOrThrowArgsSchema;
