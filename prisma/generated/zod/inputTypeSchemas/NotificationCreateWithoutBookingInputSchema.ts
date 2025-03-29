import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { MerchantCreateNestedOneWithoutNotificationInputSchema } from './MerchantCreateNestedOneWithoutNotificationInputSchema';
import { CustomerCreateNestedOneWithoutNotificationInputSchema } from './CustomerCreateNestedOneWithoutNotificationInputSchema';
import { NotificationTemplateCreateNestedOneWithoutNotificationInputSchema } from './NotificationTemplateCreateNestedOneWithoutNotificationInputSchema';

export const NotificationCreateWithoutBookingInputSchema: z.ZodType<Prisma.NotificationCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  channel: z.lazy(() => NotificationChannelSchema),
  recipient: z.string(),
  subject: z.string().optional().nullable(),
  message: z.string(),
  status: z.lazy(() => NotificationStatusSchema).optional(),
  errorMessage: z.string().optional().nullable(),
  sentAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutNotificationInputSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutNotificationInputSchema).optional(),
  template: z.lazy(() => NotificationTemplateCreateNestedOneWithoutNotificationInputSchema).optional()
}).strict();

export default NotificationCreateWithoutBookingInputSchema;
