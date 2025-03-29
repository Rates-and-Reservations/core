import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateWhereInputSchema } from '../inputTypeSchemas/UiTemplateWhereInputSchema'

export const UiTemplateDeleteManyArgsSchema: z.ZodType<Prisma.UiTemplateDeleteManyArgs> = z.object({
  where: UiTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UiTemplateDeleteManyArgsSchema;
