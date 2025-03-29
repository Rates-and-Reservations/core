import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { MerchantAssetArgsSchema } from "../outputTypeSchemas/MerchantAssetArgsSchema"

export const ResourceAssetIncludeSchema: z.ZodType<Prisma.ResourceAssetInclude> = z.object({
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  asset: z.union([z.boolean(),z.lazy(() => MerchantAssetArgsSchema)]).optional(),
}).strict()

export default ResourceAssetIncludeSchema;
