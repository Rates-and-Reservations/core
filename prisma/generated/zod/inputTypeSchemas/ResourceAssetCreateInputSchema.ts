import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateNestedOneWithoutResourceAssetInputSchema } from './ResourceCreateNestedOneWithoutResourceAssetInputSchema';
import { MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema } from './MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema';

export const ResourceAssetCreateInputSchema: z.ZodType<Prisma.ResourceAssetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutResourceAssetInputSchema),
  asset: z.lazy(() => MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema)
}).strict();

export default ResourceAssetCreateInputSchema;
