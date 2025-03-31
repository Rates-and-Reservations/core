import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';

export const MerchantUserCreateWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  role: z.lazy(() => OrganisationRolesSchema),
  isActive: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantUserCreateWithoutMerchantInputSchema;
