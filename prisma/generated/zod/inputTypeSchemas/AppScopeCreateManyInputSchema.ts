import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AppScopeCreateManyInputSchema: z.ZodType<Prisma.AppScopeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default AppScopeCreateManyInputSchema;
