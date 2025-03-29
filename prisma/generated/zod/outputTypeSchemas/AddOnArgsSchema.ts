import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnSelectSchema } from '../inputTypeSchemas/AddOnSelectSchema';
import { AddOnIncludeSchema } from '../inputTypeSchemas/AddOnIncludeSchema';

export const AddOnArgsSchema: z.ZodType<Prisma.AddOnDefaultArgs> = z.object({
  select: z.lazy(() => AddOnSelectSchema).optional(),
  include: z.lazy(() => AddOnIncludeSchema).optional(),
}).strict();

export default AddOnArgsSchema;
