import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';

export const NotificationUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  customerId: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeSchema),
  channel: z.lazy(() => NotificationChannelSchema),
  notificationTemplateId: z.string().optional().nullable(),
  recipient: z.string(),
  subject: z.string().optional().nullable(),
  message: z.string(),
  status: z.lazy(() => NotificationStatusSchema).optional(),
  errorMessage: z.string().optional().nullable(),
  sentAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default NotificationUncheckedCreateWithoutBookingInputSchema;
