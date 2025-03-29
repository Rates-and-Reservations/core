import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountTypeSchema } from './DiscountTypeSchema';

export const EnumDiscountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDiscountTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => DiscountTypeSchema).optional()
}).strict();

export default EnumDiscountTypeFieldUpdateOperationsInputSchema;
