import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetIncludeSchema } from '../inputTypeSchemas/MerchantAssetIncludeSchema'
import { MerchantAssetWhereInputSchema } from '../inputTypeSchemas/MerchantAssetWhereInputSchema'
import { MerchantAssetOrderByWithRelationInputSchema } from '../inputTypeSchemas/MerchantAssetOrderByWithRelationInputSchema'
import { MerchantAssetWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantAssetWhereUniqueInputSchema'
import { MerchantAssetScalarFieldEnumSchema } from '../inputTypeSchemas/MerchantAssetScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceAssetFindManyArgsSchema } from "../outputTypeSchemas/ResourceAssetFindManyArgsSchema"
import { MerchantAssetCountOutputTypeArgsSchema } from "../outputTypeSchemas/MerchantAssetCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MerchantAssetSelectSchema: z.ZodType<Prisma.MerchantAssetSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  url: z.boolean().optional(),
  publicId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  ResourceAsset: z.union([z.boolean(),z.lazy(() => ResourceAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MerchantAssetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MerchantAssetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MerchantAssetFindFirstOrThrowArgs> = z.object({
  select: MerchantAssetSelectSchema.optional(),
  include: z.lazy(() => MerchantAssetIncludeSchema).optional(),
  where: MerchantAssetWhereInputSchema.optional(),
  orderBy: z.union([ MerchantAssetOrderByWithRelationInputSchema.array(),MerchantAssetOrderByWithRelationInputSchema ]).optional(),
  cursor: MerchantAssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MerchantAssetScalarFieldEnumSchema,MerchantAssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MerchantAssetFindFirstOrThrowArgsSchema;
