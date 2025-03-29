import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceAssetFindManyArgsSchema } from "../outputTypeSchemas/ResourceAssetFindManyArgsSchema"
import { MerchantAssetCountOutputTypeArgsSchema } from "../outputTypeSchemas/MerchantAssetCountOutputTypeArgsSchema"

export const MerchantAssetIncludeSchema: z.ZodType<Prisma.MerchantAssetInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  ResourceAsset: z.union([z.boolean(),z.lazy(() => ResourceAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MerchantAssetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default MerchantAssetIncludeSchema;
