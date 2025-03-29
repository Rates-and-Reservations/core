import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateWhereInputSchema } from '../inputTypeSchemas/NotificationTemplateWhereInputSchema'
import { NotificationTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/NotificationTemplateOrderByWithRelationInputSchema'
import { NotificationTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/NotificationTemplateWhereUniqueInputSchema'

export const NotificationTemplateAggregateArgsSchema: z.ZodType<Prisma.NotificationTemplateAggregateArgs> = z.object({
  where: NotificationTemplateWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTemplateOrderByWithRelationInputSchema.array(),NotificationTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default NotificationTemplateAggregateArgsSchema;
