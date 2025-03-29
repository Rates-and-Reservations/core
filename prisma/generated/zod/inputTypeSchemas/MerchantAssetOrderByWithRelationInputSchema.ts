import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { ResourceAssetOrderByRelationAggregateInputSchema } from './ResourceAssetOrderByRelationAggregateInputSchema';

export const MerchantAssetOrderByWithRelationInputSchema: z.ZodType<Prisma.MerchantAssetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  publicId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetOrderByRelationAggregateInputSchema).optional()
}).strict();

export default MerchantAssetOrderByWithRelationInputSchema;
