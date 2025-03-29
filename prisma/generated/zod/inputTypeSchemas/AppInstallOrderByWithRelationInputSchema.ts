import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { AppOrderByWithRelationInputSchema } from './AppOrderByWithRelationInputSchema';
import { AppInstallScopeOrderByRelationAggregateInputSchema } from './AppInstallScopeOrderByRelationAggregateInputSchema';

export const AppInstallOrderByWithRelationInputSchema: z.ZodType<Prisma.AppInstallOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  appId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  installedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  uninstalledAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  app: z.lazy(() => AppOrderByWithRelationInputSchema).optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeOrderByRelationAggregateInputSchema).optional()
}).strict();

export default AppInstallOrderByWithRelationInputSchema;
