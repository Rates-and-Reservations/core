import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAppInstallStatusFilterSchema } from './EnumAppInstallStatusFilterSchema';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { AppScalarRelationFilterSchema } from './AppScalarRelationFilterSchema';
import { AppWhereInputSchema } from './AppWhereInputSchema';
import { AppInstallScopeListRelationFilterSchema } from './AppInstallScopeListRelationFilterSchema';

export const AppInstallWhereInputSchema: z.ZodType<Prisma.AppInstallWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppInstallWhereInputSchema),z.lazy(() => AppInstallWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallWhereInputSchema),z.lazy(() => AppInstallWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppInstallStatusFilterSchema),z.lazy(() => AppInstallStatusSchema) ]).optional(),
  installedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  uninstalledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  app: z.union([ z.lazy(() => AppScalarRelationFilterSchema),z.lazy(() => AppWhereInputSchema) ]).optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeListRelationFilterSchema).optional()
}).strict();

export default AppInstallWhereInputSchema;
