import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationSourceSchema } from './CancellationSourceSchema';

export const EnumCancellationSourceFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCancellationSourceFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CancellationSourceSchema).optional()
}).strict();

export default EnumCancellationSourceFieldUpdateOperationsInputSchema;
