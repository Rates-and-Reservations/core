import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetIncludeSchema } from '../inputTypeSchemas/MerchantAssetIncludeSchema'
import { MerchantAssetUpdateInputSchema } from '../inputTypeSchemas/MerchantAssetUpdateInputSchema'
import { MerchantAssetUncheckedUpdateInputSchema } from '../inputTypeSchemas/MerchantAssetUncheckedUpdateInputSchema'
import { MerchantAssetWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantAssetWhereUniqueInputSchema'
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

export const MerchantAssetUpdateArgsSchema: z.ZodType<Prisma.MerchantAssetUpdateArgs> = z.object({
  select: MerchantAssetSelectSchema.optional(),
  include: z.lazy(() => MerchantAssetIncludeSchema).optional(),
  data: z.union([ MerchantAssetUpdateInputSchema,MerchantAssetUncheckedUpdateInputSchema ]),
  where: MerchantAssetWhereUniqueInputSchema,
}).strict() ;

export default MerchantAssetUpdateArgsSchema;
