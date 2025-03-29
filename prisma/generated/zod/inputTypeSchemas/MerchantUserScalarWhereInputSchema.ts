import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumOrganisationRolesFilterSchema } from './EnumOrganisationRolesFilterSchema';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const MerchantUserScalarWhereInputSchema: z.ZodType<Prisma.MerchantUserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantUserScalarWhereInputSchema),z.lazy(() => MerchantUserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantUserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantUserScalarWhereInputSchema),z.lazy(() => MerchantUserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumOrganisationRolesFilterSchema),z.lazy(() => OrganisationRolesSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default MerchantUserScalarWhereInputSchema;
