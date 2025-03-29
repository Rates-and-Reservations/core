import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumNotificationTypeWithAggregatesFilterSchema } from './EnumNotificationTypeWithAggregatesFilterSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationChannelWithAggregatesFilterSchema } from './EnumNotificationChannelWithAggregatesFilterSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { EnumNotificationStatusWithAggregatesFilterSchema } from './EnumNotificationStatusWithAggregatesFilterSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  customerId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeWithAggregatesFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  channel: z.union([ z.lazy(() => EnumNotificationChannelWithAggregatesFilterSchema),z.lazy(() => NotificationChannelSchema) ]).optional(),
  notificationTemplateId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  recipient: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  subject: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumNotificationStatusWithAggregatesFilterSchema),z.lazy(() => NotificationStatusSchema) ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  sentAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default NotificationScalarWhereWithAggregatesInputSchema;
