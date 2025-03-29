import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';

export const MerchantUserCreateManyInputSchema: z.ZodType<Prisma.MerchantUserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  userId: z.string(),
  role: z.lazy(() => OrganisationRolesSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantUserCreateManyInputSchema;
