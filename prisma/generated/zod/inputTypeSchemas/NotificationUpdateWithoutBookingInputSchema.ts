import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationTypeFieldUpdateOperationsInputSchema } from './EnumNotificationTypeFieldUpdateOperationsInputSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { EnumNotificationChannelFieldUpdateOperationsInputSchema } from './EnumNotificationChannelFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { EnumNotificationStatusFieldUpdateOperationsInputSchema } from './EnumNotificationStatusFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutNotificationNestedInputSchema } from './MerchantUpdateOneRequiredWithoutNotificationNestedInputSchema';
import { CustomerUpdateOneWithoutNotificationNestedInputSchema } from './CustomerUpdateOneWithoutNotificationNestedInputSchema';
import { NotificationTemplateUpdateOneWithoutNotificationNestedInputSchema } from './NotificationTemplateUpdateOneWithoutNotificationNestedInputSchema';

export const NotificationUpdateWithoutBookingInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  channel: z.union([ z.lazy(() => NotificationChannelSchema),z.lazy(() => EnumNotificationChannelFieldUpdateOperationsInputSchema) ]).optional(),
  recipient: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subject: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => NotificationStatusSchema),z.lazy(() => EnumNotificationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sentAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutNotificationNestedInputSchema).optional(),
  customer: z.lazy(() => CustomerUpdateOneWithoutNotificationNestedInputSchema).optional(),
  template: z.lazy(() => NotificationTemplateUpdateOneWithoutNotificationNestedInputSchema).optional()
}).strict();

export default NotificationUpdateWithoutBookingInputSchema;
