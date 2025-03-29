import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/NotificationTemplateUpdateManyMutationInputSchema'
import { NotificationTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/NotificationTemplateUncheckedUpdateManyInputSchema'
import { NotificationTemplateWhereInputSchema } from '../inputTypeSchemas/NotificationTemplateWhereInputSchema'

export const NotificationTemplateUpdateManyArgsSchema: z.ZodType<Prisma.NotificationTemplateUpdateManyArgs> = z.object({
  data: z.union([ NotificationTemplateUpdateManyMutationInputSchema,NotificationTemplateUncheckedUpdateManyInputSchema ]),
  where: NotificationTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default NotificationTemplateUpdateManyArgsSchema;
