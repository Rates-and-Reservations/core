import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateIncludeSchema } from '../inputTypeSchemas/NotificationTemplateIncludeSchema'
import { NotificationTemplateCreateInputSchema } from '../inputTypeSchemas/NotificationTemplateCreateInputSchema'
import { NotificationTemplateUncheckedCreateInputSchema } from '../inputTypeSchemas/NotificationTemplateUncheckedCreateInputSchema'
import { NotificationFindManyArgsSchema } from "../outputTypeSchemas/NotificationFindManyArgsSchema"
import { NotificationTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/NotificationTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationTemplateSelectSchema: z.ZodType<Prisma.NotificationTemplateSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  type: z.boolean().optional(),
  channel: z.boolean().optional(),
  subject: z.boolean().optional(),
  body: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Notification: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NotificationTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const NotificationTemplateCreateArgsSchema: z.ZodType<Prisma.NotificationTemplateCreateArgs> = z.object({
  select: NotificationTemplateSelectSchema.optional(),
  include: z.lazy(() => NotificationTemplateIncludeSchema).optional(),
  data: z.union([ NotificationTemplateCreateInputSchema,NotificationTemplateUncheckedCreateInputSchema ]),
}).strict() ;

export default NotificationTemplateCreateArgsSchema;
