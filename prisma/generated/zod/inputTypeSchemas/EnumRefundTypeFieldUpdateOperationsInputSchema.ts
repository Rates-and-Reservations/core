import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundTypeSchema } from './RefundTypeSchema';

export const EnumRefundTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRefundTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RefundTypeSchema).optional()
}).strict();

export default EnumRefundTypeFieldUpdateOperationsInputSchema;
