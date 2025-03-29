import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';

export const EnumBusinessTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBusinessTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BusinessTypeSchema).optional()
}).strict();

export default EnumBusinessTypeFieldUpdateOperationsInputSchema;
