import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationStatusSchema } from './CancellationStatusSchema';

export const EnumCancellationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCancellationStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CancellationStatusSchema).optional()
}).strict();

export default EnumCancellationStatusFieldUpdateOperationsInputSchema;
