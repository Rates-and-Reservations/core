import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppCountOutputTypeSelectSchema } from './AppCountOutputTypeSelectSchema';

export const AppCountOutputTypeArgsSchema: z.ZodType<Prisma.AppCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AppCountOutputTypeSelectSchema;
