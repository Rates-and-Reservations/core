import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AppInstallOrderByWithRelationInputSchema } from './AppInstallOrderByWithRelationInputSchema';
import { AppScopeOrderByWithRelationInputSchema } from './AppScopeOrderByWithRelationInputSchema';

export const AppInstallScopeOrderByWithRelationInputSchema: z.ZodType<Prisma.AppInstallScopeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  appInstallId: z.lazy(() => SortOrderSchema).optional(),
  scopeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  appInstall: z.lazy(() => AppInstallOrderByWithRelationInputSchema).optional(),
  scope: z.lazy(() => AppScopeOrderByWithRelationInputSchema).optional()
}).strict();

export default AppInstallScopeOrderByWithRelationInputSchema;
