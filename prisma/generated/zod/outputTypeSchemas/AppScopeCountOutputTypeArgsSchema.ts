import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeCountOutputTypeSelectSchema } from './AppScopeCountOutputTypeSelectSchema';

export const AppScopeCountOutputTypeArgsSchema: z.ZodType<Prisma.AppScopeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppScopeCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AppScopeCountOutputTypeSelectSchema;
