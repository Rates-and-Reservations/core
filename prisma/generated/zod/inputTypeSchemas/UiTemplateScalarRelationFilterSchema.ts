import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereInputSchema } from './UiTemplateWhereInputSchema';

export const UiTemplateScalarRelationFilterSchema: z.ZodType<Prisma.UiTemplateScalarRelationFilter> = z.object({
  is: z.lazy(() => UiTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => UiTemplateWhereInputSchema).optional()
}).strict();

export default UiTemplateScalarRelationFilterSchema;
