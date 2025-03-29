import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ResourceCreatetagsInputSchema: z.ZodType<Prisma.ResourceCreatetagsInput> = z.object({
  set: z.string().array()
}).strict();

export default ResourceCreatetagsInputSchema;
