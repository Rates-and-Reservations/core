import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestSelectSchema } from '../inputTypeSchemas/RefundRequestSelectSchema';
import { RefundRequestIncludeSchema } from '../inputTypeSchemas/RefundRequestIncludeSchema';

export const RefundRequestArgsSchema: z.ZodType<Prisma.RefundRequestDefaultArgs> = z.object({
  select: z.lazy(() => RefundRequestSelectSchema).optional(),
  include: z.lazy(() => RefundRequestIncludeSchema).optional(),
}).strict();

export default RefundRequestArgsSchema;
