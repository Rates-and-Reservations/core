import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumOrganisationRolesWithAggregatesFilterSchema } from './EnumOrganisationRolesWithAggregatesFilterSchema';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const MerchantUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MerchantUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantUserScalarWhereWithAggregatesInputSchema),z.lazy(() => MerchantUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantUserScalarWhereWithAggregatesInputSchema),z.lazy(() => MerchantUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumOrganisationRolesWithAggregatesFilterSchema),z.lazy(() => OrganisationRolesSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default MerchantUserScalarWhereWithAggregatesInputSchema;
