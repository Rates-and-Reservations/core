import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutMerchantAssetInputSchema } from './MerchantCreateNestedOneWithoutMerchantAssetInputSchema';

export const MerchantAssetCreateWithoutResourceAssetInputSchema: z.ZodType<Prisma.MerchantAssetCreateWithoutResourceAssetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutMerchantAssetInputSchema)
}).strict();

export default MerchantAssetCreateWithoutResourceAssetInputSchema;
