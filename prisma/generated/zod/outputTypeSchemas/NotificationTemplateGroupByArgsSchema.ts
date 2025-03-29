import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateWhereInputSchema } from '../inputTypeSchemas/NotificationTemplateWhereInputSchema'
import { NotificationTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/NotificationTemplateOrderByWithAggregationInputSchema'
import { NotificationTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/NotificationTemplateScalarFieldEnumSchema'
import { NotificationTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/NotificationTemplateScalarWhereWithAggregatesInputSchema'

export const NotificationTemplateGroupByArgsSchema: z.ZodType<Prisma.NotificationTemplateGroupByArgs> = z.object({
  where: NotificationTemplateWhereInputSchema.optional(),
  orderBy: z.union([ NotificationTemplateOrderByWithAggregationInputSchema.array(),NotificationTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationTemplateScalarFieldEnumSchema.array(),
  having: NotificationTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default NotificationTemplateGroupByArgsSchema;
