import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';

export const NestedEnumOrganisationRolesFilterSchema: z.ZodType<Prisma.NestedEnumOrganisationRolesFilter> = z.object({
  equals: z.lazy(() => OrganisationRolesSchema).optional(),
  in: z.lazy(() => OrganisationRolesSchema).array().optional(),
  notIn: z.lazy(() => OrganisationRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => OrganisationRolesSchema),z.lazy(() => NestedEnumOrganisationRolesFilterSchema) ]).optional(),
}).strict();

export default NestedEnumOrganisationRolesFilterSchema;
