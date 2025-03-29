import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatSelectSchema } from '../inputTypeSchemas/ApiUsageStatSelectSchema';
import { ApiUsageStatIncludeSchema } from '../inputTypeSchemas/ApiUsageStatIncludeSchema';

export const ApiUsageStatArgsSchema: z.ZodType<Prisma.ApiUsageStatDefaultArgs> = z.object({
  select: z.lazy(() => ApiUsageStatSelectSchema).optional(),
  include: z.lazy(() => ApiUsageStatIncludeSchema).optional(),
}).strict();

export default ApiUsageStatArgsSchema;
