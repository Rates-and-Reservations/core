import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiKeyCountOutputTypeSelectSchema } from './ApiKeyCountOutputTypeSelectSchema';

export const ApiKeyCountOutputTypeArgsSchema: z.ZodType<Prisma.ApiKeyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ApiKeyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ApiKeyCountOutputTypeSelectSchema;
