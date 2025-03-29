import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateCreateManyInputSchema } from '../inputTypeSchemas/NotificationTemplateCreateManyInputSchema'

export const NotificationTemplateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NotificationTemplateCreateManyAndReturnArgs> = z.object({
  data: z.union([ NotificationTemplateCreateManyInputSchema,NotificationTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default NotificationTemplateCreateManyAndReturnArgsSchema;
