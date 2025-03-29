import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { EnumAppInstallStatusFieldUpdateOperationsInputSchema } from './EnumAppInstallStatusFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutAppInstallNestedInputSchema } from './MerchantUpdateOneRequiredWithoutAppInstallNestedInputSchema';
import { AppInstallScopeUpdateManyWithoutAppInstallNestedInputSchema } from './AppInstallScopeUpdateManyWithoutAppInstallNestedInputSchema';

export const AppInstallUpdateWithoutAppInputSchema: z.ZodType<Prisma.AppInstallUpdateWithoutAppInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppInstallStatusSchema),z.lazy(() => EnumAppInstallStatusFieldUpdateOperationsInputSchema) ]).optional(),
  installedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  uninstalledAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutAppInstallNestedInputSchema).optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeUpdateManyWithoutAppInstallNestedInputSchema).optional()
}).strict();

export default AppInstallUpdateWithoutAppInputSchema;
