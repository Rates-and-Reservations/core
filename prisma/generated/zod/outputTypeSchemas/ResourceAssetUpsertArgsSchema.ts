import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetIncludeSchema } from '../inputTypeSchemas/ResourceAssetIncludeSchema'
import { ResourceAssetWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceAssetWhereUniqueInputSchema'
import { ResourceAssetCreateInputSchema } from '../inputTypeSchemas/ResourceAssetCreateInputSchema'
import { ResourceAssetUncheckedCreateInputSchema } from '../inputTypeSchemas/ResourceAssetUncheckedCreateInputSchema'
import { ResourceAssetUpdateInputSchema } from '../inputTypeSchemas/ResourceAssetUpdateInputSchema'
import { ResourceAssetUncheckedUpdateInputSchema } from '../inputTypeSchemas/ResourceAssetUncheckedUpdateInputSchema'
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

export const ResourceAssetUpsertArgsSchema: z.ZodType<Prisma.ResourceAssetUpsertArgs> = z.object({
  select: ResourceAssetSelectSchema.optional(),
  include: z.lazy(() => ResourceAssetIncludeSchema).optional(),
  where: ResourceAssetWhereUniqueInputSchema,
  create: z.union([ ResourceAssetCreateInputSchema,ResourceAssetUncheckedCreateInputSchema ]),
  update: z.union([ ResourceAssetUpdateInputSchema,ResourceAssetUncheckedUpdateInputSchema ]),
}).strict() ;

export default ResourceAssetUpsertArgsSchema;
