import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';

export const EnumRefundRequestStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRefundRequestStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RefundRequestStatusSchema).optional()
}).strict();

export default EnumRefundRequestStatusFieldUpdateOperationsInputSchema;
