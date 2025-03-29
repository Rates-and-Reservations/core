import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/UiTemplateUpdateManyMutationInputSchema'
import { UiTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UiTemplateUncheckedUpdateManyInputSchema'
import { UiTemplateWhereInputSchema } from '../inputTypeSchemas/UiTemplateWhereInputSchema'

export const UiTemplateUpdateManyArgsSchema: z.ZodType<Prisma.UiTemplateUpdateManyArgs> = z.object({
  data: z.union([ UiTemplateUpdateManyMutationInputSchema,UiTemplateUncheckedUpdateManyInputSchema ]),
  where: UiTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UiTemplateUpdateManyArgsSchema;
