import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';

export const EnumAppInstallStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAppInstallStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AppInstallStatusSchema).optional()
}).strict();

export default EnumAppInstallStatusFieldUpdateOperationsInputSchema;
