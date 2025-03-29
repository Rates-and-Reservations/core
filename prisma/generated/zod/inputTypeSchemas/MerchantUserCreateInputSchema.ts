import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { MerchantCreateNestedOneWithoutMerchantUserInputSchema } from './MerchantCreateNestedOneWithoutMerchantUserInputSchema';

export const MerchantUserCreateInputSchema: z.ZodType<Prisma.MerchantUserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  role: z.lazy(() => OrganisationRolesSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutMerchantUserInputSchema)
}).strict();

export default MerchantUserCreateInputSchema;
