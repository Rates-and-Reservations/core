import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateCreateManyInputSchema } from '../inputTypeSchemas/UiTemplateCreateManyInputSchema'

export const UiTemplateCreateManyArgsSchema: z.ZodType<Prisma.UiTemplateCreateManyArgs> = z.object({
  data: z.union([ UiTemplateCreateManyInputSchema,UiTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UiTemplateCreateManyArgsSchema;
