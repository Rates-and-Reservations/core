import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumOrganisationRolesFilterSchema } from './EnumOrganisationRolesFilterSchema';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUserWhereInputSchema: z.ZodType<Prisma.MerchantUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantUserWhereInputSchema),z.lazy(() => MerchantUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantUserWhereInputSchema),z.lazy(() => MerchantUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumOrganisationRolesFilterSchema),z.lazy(() => OrganisationRolesSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
}).strict();

export default MerchantUserWhereInputSchema;
