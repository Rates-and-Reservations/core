import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestCountOutputTypeSelectSchema } from './RefundRequestCountOutputTypeSelectSchema';

export const RefundRequestCountOutputTypeArgsSchema: z.ZodType<Prisma.RefundRequestCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RefundRequestCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RefundRequestCountOutputTypeSelectSchema;
