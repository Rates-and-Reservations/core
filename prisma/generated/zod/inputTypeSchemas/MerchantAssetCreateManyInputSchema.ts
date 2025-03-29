import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MerchantAssetCreateManyInputSchema: z.ZodType<Prisma.MerchantAssetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantAssetCreateManyInputSchema;
