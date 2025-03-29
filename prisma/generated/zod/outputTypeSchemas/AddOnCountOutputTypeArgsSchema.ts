import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnCountOutputTypeSelectSchema } from './AddOnCountOutputTypeSelectSchema';

export const AddOnCountOutputTypeArgsSchema: z.ZodType<Prisma.AddOnCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AddOnCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AddOnCountOutputTypeSelectSchema;
