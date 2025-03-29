import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateSelectSchema } from '../inputTypeSchemas/NotificationTemplateSelectSchema';
import { NotificationTemplateIncludeSchema } from '../inputTypeSchemas/NotificationTemplateIncludeSchema';

export const NotificationTemplateArgsSchema: z.ZodType<Prisma.NotificationTemplateDefaultArgs> = z.object({
  select: z.lazy(() => NotificationTemplateSelectSchema).optional(),
  include: z.lazy(() => NotificationTemplateIncludeSchema).optional(),
}).strict();

export default NotificationTemplateArgsSchema;
