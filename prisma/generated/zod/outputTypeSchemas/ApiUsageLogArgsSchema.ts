import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogSelectSchema } from '../inputTypeSchemas/ApiUsageLogSelectSchema';
import { ApiUsageLogIncludeSchema } from '../inputTypeSchemas/ApiUsageLogIncludeSchema';

export const ApiUsageLogArgsSchema: z.ZodType<Prisma.ApiUsageLogDefaultArgs> = z.object({
  select: z.lazy(() => ApiUsageLogSelectSchema).optional(),
  include: z.lazy(() => ApiUsageLogIncludeSchema).optional(),
}).strict();

export default ApiUsageLogArgsSchema;
