import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetUncheckedCreateNestedManyWithoutAssetInputSchema } from './ResourceAssetUncheckedCreateNestedManyWithoutAssetInputSchema';

export const MerchantAssetUncheckedCreateInputSchema: z.ZodType<Prisma.MerchantAssetUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ResourceAsset: z.lazy(() => ResourceAssetUncheckedCreateNestedManyWithoutAssetInputSchema).optional()
}).strict();

export default MerchantAssetUncheckedCreateInputSchema;
