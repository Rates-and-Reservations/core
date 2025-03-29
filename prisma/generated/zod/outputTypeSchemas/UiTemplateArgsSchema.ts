import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateSelectSchema } from '../inputTypeSchemas/UiTemplateSelectSchema';
import { UiTemplateIncludeSchema } from '../inputTypeSchemas/UiTemplateIncludeSchema';

export const UiTemplateArgsSchema: z.ZodType<Prisma.UiTemplateDefaultArgs> = z.object({
  select: z.lazy(() => UiTemplateSelectSchema).optional(),
  include: z.lazy(() => UiTemplateIncludeSchema).optional(),
}).strict();

export default UiTemplateArgsSchema;
