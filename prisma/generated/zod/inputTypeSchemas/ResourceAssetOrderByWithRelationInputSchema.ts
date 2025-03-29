import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ResourceOrderByWithRelationInputSchema } from './ResourceOrderByWithRelationInputSchema';
import { MerchantAssetOrderByWithRelationInputSchema } from './MerchantAssetOrderByWithRelationInputSchema';

export const ResourceAssetOrderByWithRelationInputSchema: z.ZodType<Prisma.ResourceAssetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputSchema).optional(),
  asset: z.lazy(() => MerchantAssetOrderByWithRelationInputSchema).optional()
}).strict();

export default ResourceAssetOrderByWithRelationInputSchema;
