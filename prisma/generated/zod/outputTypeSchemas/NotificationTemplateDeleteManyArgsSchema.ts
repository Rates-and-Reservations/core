import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateWhereInputSchema } from '../inputTypeSchemas/NotificationTemplateWhereInputSchema'

export const NotificationTemplateDeleteManyArgsSchema: z.ZodType<Prisma.NotificationTemplateDeleteManyArgs> = z.object({
  where: NotificationTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default NotificationTemplateDeleteManyArgsSchema;
