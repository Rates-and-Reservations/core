import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationFindManyArgsSchema } from "../outputTypeSchemas/NotificationFindManyArgsSchema"
import { NotificationTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/NotificationTemplateCountOutputTypeArgsSchema"

export const NotificationTemplateIncludeSchema: z.ZodType<Prisma.NotificationTemplateInclude> = z.object({
  Notification: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NotificationTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default NotificationTemplateIncludeSchema;
