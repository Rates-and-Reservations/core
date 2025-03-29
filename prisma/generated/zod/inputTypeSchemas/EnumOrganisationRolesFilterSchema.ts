import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { NestedEnumOrganisationRolesFilterSchema } from './NestedEnumOrganisationRolesFilterSchema';

export const EnumOrganisationRolesFilterSchema: z.ZodType<Prisma.EnumOrganisationRolesFilter> = z.object({
  equals: z.lazy(() => OrganisationRolesSchema).optional(),
  in: z.lazy(() => OrganisationRolesSchema).array().optional(),
  notIn: z.lazy(() => OrganisationRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => OrganisationRolesSchema),z.lazy(() => NestedEnumOrganisationRolesFilterSchema) ]).optional(),
}).strict();

export default EnumOrganisationRolesFilterSchema;
