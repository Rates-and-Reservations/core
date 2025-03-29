import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestSelectSchema } from '../inputTypeSchemas/CancellationRequestSelectSchema';
import { CancellationRequestIncludeSchema } from '../inputTypeSchemas/CancellationRequestIncludeSchema';

export const CancellationRequestArgsSchema: z.ZodType<Prisma.CancellationRequestDefaultArgs> = z.object({
  select: z.lazy(() => CancellationRequestSelectSchema).optional(),
  include: z.lazy(() => CancellationRequestIncludeSchema).optional(),
}).strict();

export default CancellationRequestArgsSchema;
