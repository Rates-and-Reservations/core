import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateNestedManyWithoutAssetInputSchema } from './ResourceAssetCreateNestedManyWithoutAssetInputSchema';

export const MerchantAssetCreateWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantAssetCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ResourceAsset: z.lazy(() => ResourceAssetCreateNestedManyWithoutAssetInputSchema).optional()
}).strict();

export default MerchantAssetCreateWithoutMerchantInputSchema;
