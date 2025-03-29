import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { NotificationCreateNestedManyWithoutTemplateInputSchema } from './NotificationCreateNestedManyWithoutTemplateInputSchema';

export const NotificationTemplateCreateInputSchema: z.ZodType<Prisma.NotificationTemplateCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  type: z.lazy(() => NotificationTypeSchema),
  channel: z.lazy(() => NotificationChannelSchema),
  subject: z.string(),
  body: z.string(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default NotificationTemplateCreateInputSchema;
