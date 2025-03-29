import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumOrganisationRolesFilterSchema } from './NestedEnumOrganisationRolesFilterSchema';

export const NestedEnumOrganisationRolesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOrganisationRolesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OrganisationRolesSchema).optional(),
  in: z.lazy(() => OrganisationRolesSchema).array().optional(),
  notIn: z.lazy(() => OrganisationRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => OrganisationRolesSchema),z.lazy(() => NestedEnumOrganisationRolesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrganisationRolesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrganisationRolesFilterSchema).optional()
}).strict();

export default NestedEnumOrganisationRolesWithAggregatesFilterSchema;
