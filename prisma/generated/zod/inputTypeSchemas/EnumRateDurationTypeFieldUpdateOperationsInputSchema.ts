import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';

export const EnumRateDurationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRateDurationTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RateDurationTypeSchema).optional()
}).strict();

export default EnumRateDurationTypeFieldUpdateOperationsInputSchema;
