import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateCreateManyInputSchema } from '../inputTypeSchemas/UiTemplateCreateManyInputSchema'

export const UiTemplateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UiTemplateCreateManyAndReturnArgs> = z.object({
  data: z.union([ UiTemplateCreateManyInputSchema,UiTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UiTemplateCreateManyAndReturnArgsSchema;
