import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SelectionModeSchema } from './SelectionModeSchema';

export const EnumSelectionModeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSelectionModeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SelectionModeSchema).optional()
}).strict();

export default EnumSelectionModeFieldUpdateOperationsInputSchema;
