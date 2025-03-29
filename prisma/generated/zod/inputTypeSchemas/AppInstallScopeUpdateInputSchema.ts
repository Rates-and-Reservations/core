import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AppInstallUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema } from './AppInstallUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema';
import { AppScopeUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema } from './AppScopeUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema';

export const AppInstallScopeUpdateInputSchema: z.ZodType<Prisma.AppInstallScopeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  appInstall: z.lazy(() => AppInstallUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema).optional(),
  scope: z.lazy(() => AppScopeUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema).optional()
}).strict();

export default AppInstallScopeUpdateInputSchema;
