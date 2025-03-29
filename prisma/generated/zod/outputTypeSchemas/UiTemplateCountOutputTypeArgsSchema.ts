import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateCountOutputTypeSelectSchema } from './UiTemplateCountOutputTypeSelectSchema';

export const UiTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.UiTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UiTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default UiTemplateCountOutputTypeSelectSchema;
