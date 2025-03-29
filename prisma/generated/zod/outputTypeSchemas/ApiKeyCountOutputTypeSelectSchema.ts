import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ApiKeyCountOutputTypeSelectSchema: z.ZodType<Prisma.ApiKeyCountOutputTypeSelect> = z.object({
  ApiUsageLog: z.boolean().optional(),
  ApiUsageStat: z.boolean().optional(),
}).strict();

export default ApiKeyCountOutputTypeSelectSchema;
