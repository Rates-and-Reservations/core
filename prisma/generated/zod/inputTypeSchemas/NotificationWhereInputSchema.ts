import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumNotificationTypeFilterSchema } from './EnumNotificationTypeFilterSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationChannelFilterSchema } from './EnumNotificationChannelFilterSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { EnumNotificationStatusFilterSchema } from './EnumNotificationStatusFilterSchema';
import { NotificationStatusSchema } from './NotificationStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { BookingNullableScalarRelationFilterSchema } from './BookingNullableScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { CustomerNullableScalarRelationFilterSchema } from './CustomerNullableScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { NotificationTemplateNullableScalarRelationFilterSchema } from './NotificationTemplateNullableScalarRelationFilterSchema';
import { NotificationTemplateWhereInputSchema } from './NotificationTemplateWhereInputSchema';

export const NotificationWhereInputSchema: z.ZodType<Prisma.NotificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  channel: z.union([ z.lazy(() => EnumNotificationChannelFilterSchema),z.lazy(() => NotificationChannelSchema) ]).optional(),
  notificationTemplateId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  recipient: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subject: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumNotificationStatusFilterSchema),z.lazy(() => NotificationStatusSchema) ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingNullableScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional().nullable(),
  customer: z.union([ z.lazy(() => CustomerNullableScalarRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional().nullable(),
  template: z.union([ z.lazy(() => NotificationTemplateNullableScalarRelationFilterSchema),z.lazy(() => NotificationTemplateWhereInputSchema) ]).optional().nullable(),
}).strict();

export default NotificationWhereInputSchema;
