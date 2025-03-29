import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const NotificationTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.NotificationTemplateCountOutputTypeSelect> = z.object({
  Notification: z.boolean().optional(),
}).strict();

export default NotificationTemplateCountOutputTypeSelectSchema;
