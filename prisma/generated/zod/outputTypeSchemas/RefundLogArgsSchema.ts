import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogSelectSchema } from '../inputTypeSchemas/RefundLogSelectSchema';
import { RefundLogIncludeSchema } from '../inputTypeSchemas/RefundLogIncludeSchema';

export const RefundLogArgsSchema: z.ZodType<Prisma.RefundLogDefaultArgs> = z.object({
  select: z.lazy(() => RefundLogSelectSchema).optional(),
  include: z.lazy(() => RefundLogIncludeSchema).optional(),
}).strict();

export default RefundLogArgsSchema;
