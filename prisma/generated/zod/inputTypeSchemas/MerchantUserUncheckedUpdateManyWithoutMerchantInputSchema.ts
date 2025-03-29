import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OrganisationRolesSchema } from './OrganisationRolesSchema';
import { EnumOrganisationRolesFieldUpdateOperationsInputSchema } from './EnumOrganisationRolesFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const MerchantUserUncheckedUpdateManyWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserUncheckedUpdateManyWithoutMerchantInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => OrganisationRolesSchema),z.lazy(() => EnumOrganisationRolesFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default MerchantUserUncheckedUpdateManyWithoutMerchantInputSchema;
