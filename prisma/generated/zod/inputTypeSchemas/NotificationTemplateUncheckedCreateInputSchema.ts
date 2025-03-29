import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { NotificationUncheckedCreateNestedManyWithoutTemplateInputSchema } from './NotificationUncheckedCreateNestedManyWithoutTemplateInputSchema';

export const NotificationTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationTemplateUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  type: z.lazy(() => NotificationTypeSchema),
  channel: z.lazy(() => NotificationChannelSchema),
  subject: z.string(),
  body: z.string(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default NotificationTemplateUncheckedCreateInputSchema;
