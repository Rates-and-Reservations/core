import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RefundRequestCountOutputTypeSelectSchema: z.ZodType<Prisma.RefundRequestCountOutputTypeSelect> = z.object({
  RefundLog: z.boolean().optional(),
}).strict();

export default RefundRequestCountOutputTypeSelectSchema;
