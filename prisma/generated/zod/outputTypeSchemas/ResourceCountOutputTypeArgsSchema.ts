import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCountOutputTypeSelectSchema } from './ResourceCountOutputTypeSelectSchema';

export const ResourceCountOutputTypeArgsSchema: z.ZodType<Prisma.ResourceCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ResourceCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ResourceCountOutputTypeSelectSchema;
