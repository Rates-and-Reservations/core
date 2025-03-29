import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';

export const MerchantUserCreateManyMerchantInputSchema: z.ZodType<Prisma.MerchantUserCreateManyMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  role: z.lazy(() => OrganisationRolesSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantUserCreateManyMerchantInputSchema;
