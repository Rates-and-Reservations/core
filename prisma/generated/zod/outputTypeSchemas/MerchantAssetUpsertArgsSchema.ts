import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetIncludeSchema } from '../inputTypeSchemas/MerchantAssetIncludeSchema'
import { MerchantAssetWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantAssetWhereUniqueInputSchema'
import { MerchantAssetCreateInputSchema } from '../inputTypeSchemas/MerchantAssetCreateInputSchema'
import { MerchantAssetUncheckedCreateInputSchema } from '../inputTypeSchemas/MerchantAssetUncheckedCreateInputSchema'
import { MerchantAssetUpdateInputSchema } from '../inputTypeSchemas/MerchantAssetUpdateInputSchema'
import { MerchantAssetUncheckedUpdateInputSchema } from '../inputTypeSchemas/MerchantAssetUncheckedUpdateInputSchema'
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

export const MerchantAssetUpsertArgsSchema: z.ZodType<Prisma.MerchantAssetUpsertArgs> = z.object({
  select: MerchantAssetSelectSchema.optional(),
  include: z.lazy(() => MerchantAssetIncludeSchema).optional(),
  where: MerchantAssetWhereUniqueInputSchema,
  create: z.union([ MerchantAssetCreateInputSchema,MerchantAssetUncheckedCreateInputSchema ]),
  update: z.union([ MerchantAssetUpdateInputSchema,MerchantAssetUncheckedUpdateInputSchema ]),
}).strict() ;

export default MerchantAssetUpsertArgsSchema;
