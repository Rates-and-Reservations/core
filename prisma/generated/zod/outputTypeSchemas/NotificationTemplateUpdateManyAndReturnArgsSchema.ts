import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/NotificationTemplateUpdateManyMutationInputSchema'
import { NotificationTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/NotificationTemplateUncheckedUpdateManyInputSchema'
import { NotificationTemplateWhereInputSchema } from '../inputTypeSchemas/NotificationTemplateWhereInputSchema'

export const NotificationTemplateUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.NotificationTemplateUpdateManyAndReturnArgs> = z.object({
  data: z.union([ NotificationTemplateUpdateManyMutationInputSchema,NotificationTemplateUncheckedUpdateManyInputSchema ]),
  where: NotificationTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default NotificationTemplateUpdateManyAndReturnArgsSchema;
