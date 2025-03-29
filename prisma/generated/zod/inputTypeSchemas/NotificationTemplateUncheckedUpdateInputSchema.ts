import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationTypeFieldUpdateOperationsInputSchema } from './EnumNotificationTypeFieldUpdateOperationsInputSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { EnumNotificationChannelFieldUpdateOperationsInputSchema } from './EnumNotificationChannelFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NotificationUncheckedUpdateManyWithoutTemplateNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutTemplateNestedInputSchema';

export const NotificationTemplateUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationTemplateUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  merchantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  channel: z.union([ z.lazy(() => NotificationChannelSchema),z.lazy(() => EnumNotificationChannelFieldUpdateOperationsInputSchema) ]).optional(),
  subject: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Notification: z.lazy(() => NotificationUncheckedUpdateManyWithoutTemplateNestedInputSchema).optional()
}).strict();

export default NotificationTemplateUncheckedUpdateInputSchema;
