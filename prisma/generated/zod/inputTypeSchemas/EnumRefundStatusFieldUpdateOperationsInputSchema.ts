import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundStatusSchema } from './RefundStatusSchema';

export const EnumRefundStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRefundStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RefundStatusSchema).optional()
}).strict();

export default EnumRefundStatusFieldUpdateOperationsInputSchema;
