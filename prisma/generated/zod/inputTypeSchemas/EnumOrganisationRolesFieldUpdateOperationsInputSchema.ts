import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';

export const EnumOrganisationRolesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumOrganisationRolesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => OrganisationRolesSchema).optional()
}).strict();

export default EnumOrganisationRolesFieldUpdateOperationsInputSchema;
