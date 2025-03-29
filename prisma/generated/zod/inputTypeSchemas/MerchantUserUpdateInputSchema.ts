import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { EnumOrganisationRolesFieldUpdateOperationsInputSchema } from './EnumOrganisationRolesFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutMerchantUserNestedInputSchema } from './MerchantUpdateOneRequiredWithoutMerchantUserNestedInputSchema';

export const MerchantUserUpdateInputSchema: z.ZodType<Prisma.MerchantUserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => OrganisationRolesSchema),z.lazy(() => EnumOrganisationRolesFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutMerchantUserNestedInputSchema).optional()
}).strict();

export default MerchantUserUpdateInputSchema;
