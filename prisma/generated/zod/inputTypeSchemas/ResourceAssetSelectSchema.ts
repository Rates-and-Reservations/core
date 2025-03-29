import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { MerchantAssetArgsSchema } from "../outputTypeSchemas/MerchantAssetArgsSchema"

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

export default ResourceAssetSelectSchema;
