import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereInputSchema } from './UiTemplateWhereInputSchema';

export const UiTemplateListRelationFilterSchema: z.ZodType<Prisma.UiTemplateListRelationFilter> = z.object({
  every: z.lazy(() => UiTemplateWhereInputSchema).optional(),
  some: z.lazy(() => UiTemplateWhereInputSchema).optional(),
  none: z.lazy(() => UiTemplateWhereInputSchema).optional()
}).strict();

export default UiTemplateListRelationFilterSchema;
