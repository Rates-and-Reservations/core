import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutMerchantAssetInputSchema } from './MerchantCreateNestedOneWithoutMerchantAssetInputSchema';
import { ResourceAssetCreateNestedManyWithoutAssetInputSchema } from './ResourceAssetCreateNestedManyWithoutAssetInputSchema';

export const MerchantAssetCreateInputSchema: z.ZodType<Prisma.MerchantAssetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutMerchantAssetInputSchema),
  ResourceAsset: z.lazy(() => ResourceAssetCreateNestedManyWithoutAssetInputSchema).optional()
}).strict();

export default MerchantAssetCreateInputSchema;
