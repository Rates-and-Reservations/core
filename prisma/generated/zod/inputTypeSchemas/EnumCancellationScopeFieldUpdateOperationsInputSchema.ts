import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationScopeSchema } from './CancellationScopeSchema';

export const EnumCancellationScopeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCancellationScopeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CancellationScopeSchema).optional()
}).strict();

export default EnumCancellationScopeFieldUpdateOperationsInputSchema;
