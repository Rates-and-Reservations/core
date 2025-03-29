import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';

export const NotificationTemplateCreateWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTemplateCreateWithoutNotificationInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  type: z.lazy(() => NotificationTypeSchema),
  channel: z.lazy(() => NotificationChannelSchema),
  subject: z.string(),
  body: z.string(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default NotificationTemplateCreateWithoutNotificationInputSchema;
